import { Gender, type GenderValue } from "../lib/models/Gender";
import { PartsOfSpeech, type PartsOfSpeechValue } from "../lib/models/PartOfSpeech";

export class LatinSearchResult extends HTMLElement {
  public static observedAttributes = ['search-result'];
  public static htmlName = 'latin-search-result';

  public declare searchResult: Record<string, unknown>;


  constructor() {
    super();
  }

  attributeChangedCallback(name: string, _: unknown, newValue: string) {
      if (name === 'search-result') {
          this.searchResult = JSON.parse(newValue);
          console.log(newValue);
      }
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
      </article>
      <hr>
      `;

      this.generateRootLines();
      this.generateMatches();

      this.clearViews();
      this.showView(0);
      const viewSelector = this.querySelector('#viewSelector') as HTMLElement;

      viewSelector.addEventListener('viewSelected', (event) => {
        const viewDiv = this.querySelector('#views') as HTMLDivElement;
        const viewsCount = viewDiv.children.length;
        const viewIndex = (event as CustomEvent).detail.index % viewsCount;

        this.clearViews();
        this.showView(viewIndex);
      });
  }
  showView(index: number) {
    const viewDiv = this.querySelector('#views') as HTMLDivElement;

   (viewDiv.children[index] as HTMLElement).style.display = 'block';
  }

  clearViews(){
    return;
    const viewDiv = this.querySelector('#views') as HTMLDivElement;

    for (const child of viewDiv.children) {
      (child as HTMLElement).style.display = 'none';
    }
  }


  generateRootLines() {
    const rootsDiv = this.querySelector('#roots') as HTMLDivElement;
    for (const line of this.searchResult.rootLines as []) {
      const newRoot = document.createElement('root-line');
      newRoot.setAttribute('line', JSON.stringify(line));

      rootsDiv.appendChild(newRoot);
    }

    const meaningsHtml = this.searchResult.meanings ? `
      <p>
       ${(this.searchResult.meanings as []).join(';')}.
      </p>
    ` : '';

    rootsDiv.innerHTML += meaningsHtml;
  }

  generateMatches() {
    const matchesDiv = this.querySelector('#matches') as HTMLDivElement;
    const matchResults = this.searchResult.recordMatches as Record<string, string>[];

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
