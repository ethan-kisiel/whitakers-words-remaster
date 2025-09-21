import WordsHttpClient from '../utils/WordsHttpClient';
import { InputFieldWithButton } from '../components/input-field-with-button';
import { addSearch, fetchRecentSearches } from './session-storage-manager';

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

        delete search.isLatin;

        addResult(search as unknown as string, searchType);
    }
});

async function handleInputEvent(event: unknown) {
    const result = (await WordsHttpClient.shared
        .getTranslation(searchType, (event as CustomEvent).detail.value));

    for (const res of result.reverse()) {
        addSearch(res, searchType === 'LATIN');
        addResult(res, searchType);
    }
}


function addResult(result: string, searchType: 'LATIN' | 'ENGLISH') {
    const dictionarySection = document.querySelector('#dictionary') as HTMLDivElement;

    switch (searchType) {
        case 'LATIN':
            addLatinResult(result, dictionarySection);
            break;
        case 'ENGLISH':
            addEnglishResult(result, dictionarySection);
            break;
    }
}

function addLatinResult(data: string, dictionarySection: HTMLDivElement) {
    const element = document.createElement('latin-search-result');
    element.setAttribute('search-result', JSON.stringify(data));

    dictionarySection.prepend(element);
}

function addEnglishResult(data: string, dictionarySection: HTMLDivElement) {
    const element = document.createElement('english-search-result');
    element.setAttribute('search-result', JSON.stringify(data));

    dictionarySection.prepend(element);
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