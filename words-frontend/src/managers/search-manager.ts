import WordsHttpClient from '../utils/WordsHttpClient';
import { InputFieldWithButton } from '../components/input-field-with-button';
import { addSearch, fetchRecentSearches, removeSearch } from './session-storage-manager';
import { Snackbar } from '../components/snackbar';

let searchType: 'LATIN' | 'ENGLISH' = 'LATIN';


const searchResult = document.querySelector(InputFieldWithButton.htmlName) as InputFieldWithButton;
searchResult?.addEventListener(InputFieldWithButton.submittedEventName, handleInputEvent);


const latinSearch = document.querySelector('#select-latin-search') as HTMLAnchorElement;
const englishSearch = document.querySelector('#select-english-search') as HTMLAnchorElement;

latinSearch.addEventListener('click', () => {changeSearchType('LATIN')});
englishSearch.addEventListener('click', () => {changeSearchType('ENGLISH')});

window.addEventListener('load', () => {
    const recentSearches = fetchRecentSearches();

    for (const search of recentSearches) {
        const searchType = search.isLatin ? 'LATIN' : 'ENGLISH';
        const uniqueId = search.uniqueId;

        delete search.isLatin;
        delete search.uniqueId

        addResult(search as unknown as string, searchType, uniqueId);
    }
});

async function handleInputEvent(event: unknown) {
    const result = (await WordsHttpClient.shared
        .getTranslation(searchType, (event as CustomEvent).detail.value));

    if (!result || result.length === 0) {
        const snackbar = document.querySelector(Snackbar.htmlName) as Snackbar;
        snackbar.addSnack('No results found.', 'error');
    }
    else {
        console.log(result);
    }

    for (const res of result.reverse()) {
        const uniqueId = crypto.randomUUID();
        addSearch(res, searchType === 'LATIN', uniqueId);
        addResult(res, searchType, uniqueId);
    }
}


function addResult(result: string, searchType: 'LATIN' | 'ENGLISH', uniqueId: string) {
    const dictionarySection = document.querySelector('#dictionary') as HTMLDivElement;

    switch (searchType) {
        case 'LATIN':
            addLatinResult(result, dictionarySection, uniqueId);
            break;
        case 'ENGLISH':
            addEnglishResult(result, dictionarySection, uniqueId);
            break;
    }
}

function addLatinResult(data: string, dictionarySection: HTMLDivElement, uniqueId: string) {
    const element = document.createElement('latin-search-result');
    element.setAttribute('search-result', JSON.stringify(data));
    element.setAttribute('unique-id', uniqueId);

    element.addEventListener('removeSearchResult', (event) => {
        const detail = (event as CustomEvent).detail;
        removeSearchResult(detail.uniqueId);
    });

    dictionarySection.prepend(element);
}

function addEnglishResult(data: string, dictionarySection: HTMLDivElement, uniqueId: string) {
    const element = document.createElement('english-search-result');
    element.setAttribute('search-result', JSON.stringify(data));
    element.setAttribute('unique-id', uniqueId);

    element.addEventListener('removeSearchResult', (event) => {
        const detail = (event as CustomEvent).detail;
        removeSearchResult(detail.uniqueId);
    });

    dictionarySection.prepend(element);
}

function removeSearchResult(uniqueId: string) {
    const element = document.getElementById(uniqueId);
    if (element) {
        removeSearch(element.id);
        element.remove();
    }
}


function changeSearchType(newSearchType: 'LATIN' | 'ENGLISH') {
    searchType = newSearchType;

    const titleCaseType = searchType.toLowerCase().replace(searchType[0], searchType[0].toUpperCase());
    (document.querySelector('#search-type-label') as HTMLElement).innerHTML = `${titleCaseType} Search`;


    switch (searchType) {
        case 'LATIN':
            latinSearch.className = 'active';
            englishSearch.className = '';
            break;
        case 'ENGLISH':
            latinSearch.className = '';
            englishSearch.className = 'active';
            break;
    }
}