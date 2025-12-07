import SearchResult from "../core/SearchResult";
import { Gender, type GenderValue } from "../lib/models/Gender";
import { PartsOfSpeech, type PartsOfSpeechValue } from "../lib/models/PartOfSpeech";

export class LatinSearchResult extends SearchResult {
  public static htmlName = 'latin-search-result';

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <article class="dictionary-entry">
      <div id="views">
        <div id="roots">
        </div>
        <div id="matches" class="dictionary-note">
        </div>
      </div>
      <div>
        <a class='removeSearchButton'>X</a>
      </div>
      </article>
      <hr>
      `;

      this.generateRootLines();
      this.generateMatches();

      const removeButton = this.querySelector('.removeSearchButton') as HTMLButtonElement;
      removeButton.addEventListener('click', (_) => {
        this.emitRemoveEvent();
      });
  }

  showView(index: number) {
    const viewDiv = this.querySelector('#views') as HTMLDivElement;

   (viewDiv.children[index] as HTMLElement).style.display = 'block';
  }

  generateRootLines() {
    const rootsDiv = this.querySelector('#roots') as HTMLDivElement;
    for (const line of this._searchResult.rootLines as []) {
      let lineAsRecord = line as Record<string, string>
      if (!lineAsRecord.root) {
        lineAsRecord.root = this._searchResult.searchQuery as string;
      }
      const newRoot = document.createElement('root-line');
      newRoot.setAttribute('line', JSON.stringify(lineAsRecord));

      rootsDiv.appendChild(newRoot);
    }

    const meaningsHtml = this._searchResult.meanings ? `
      <p>
       ${(this._searchResult.meanings as []).join(';')}.
      </p>
    ` : '';

    rootsDiv.innerHTML += meaningsHtml;
  }

  generateMatches() {
    const matchesDiv = this.querySelector('#matches') as HTMLDivElement;
    const matchResults = this._searchResult.recordMatches as Record<string, string>[];

    let isFirstElement = true;

    for (const match of matchResults) {
      if (isFirstElement) {
        const partOfSpeech = matchResults[0].partOfSpeech as PartsOfSpeechValue;
        const gender = matchResults[0].gender as GenderValue;

        const partOfSpeechHtml = `${PartsOfSpeech.getLongForm(partOfSpeech)}`;

        const genderHtml = gender ? `
            <span class="tooltip" data-tooltip="${Gender.getLongForm(gender)}">${gender}.</span>
        ` : '';

        matchesDiv.innerHTML = `<h5>${matchResults[0].wordMatch} <small>${partOfSpeechHtml}</small> <small>${genderHtml}</small></h5>`;

        isFirstElement = false;
      }

      const newMatch = document.createElement('word-match');
      newMatch.setAttribute('match', JSON.stringify(match));

      matchesDiv.appendChild(newMatch);
    }
  }

}

if (!window.customElements.get(LatinSearchResult.htmlName)) {
  window.customElements.define(LatinSearchResult.htmlName, LatinSearchResult);
}
