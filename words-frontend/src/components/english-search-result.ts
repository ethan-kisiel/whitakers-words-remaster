import SearchResult from "../core/SearchResult";

export class EnglishSearchResult extends SearchResult {
  public static htmlName = 'english-search-result';

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <article class="dictionary-entry">
      <view-selector id="viewSelector" views-count='1'></view-selector>
      <div id="views">
        <div id="roots">
        </div>
      </div>
      <div>
        <a class='removeSearchButton'>X</a>
      </div>
      </article>
      <hr>
      `;

      this.generateRootLines();

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

      const removeButton = this.querySelector('.removeSearchButton') as HTMLButtonElement;
      removeButton.addEventListener('click', (_) => {
        this.emitRemoveEvent();
      });
  }
  showView(index: number) {
    const viewDiv = this.querySelector('#views') as HTMLDivElement;

   (viewDiv.children[index] as HTMLElement).style.display = 'block';
  }

  clearViews(){
    const viewDiv = this.querySelector('#views') as HTMLDivElement;

    for (const child of viewDiv.children) {
      (child as HTMLElement).style.display = 'none';
    }
  }

  generateRootLines() {
    const rootsDiv = this.querySelector('#roots') as HTMLDivElement;
    for (const line of this._searchResult.rootLines as []) {
      const newRoot = document.createElement('root-line');
      newRoot.setAttribute('line', JSON.stringify(line));

      rootsDiv.appendChild(newRoot);
    }

    const meaningsHtml = this._searchResult.meanings ? `
      <p>
       ${(this._searchResult.meanings as []).join(';')}.
      </p>
    ` : '';

    rootsDiv.innerHTML += meaningsHtml;
  }
}

if (!window.customElements.get(EnglishSearchResult.htmlName)) {
  window.customElements.define(EnglishSearchResult.htmlName, EnglishSearchResult);
}
