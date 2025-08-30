
export class LatinSearchResult extends HTMLElement {
  public static observedAttributes = ['search-result'];
  public static htmlName = 'latin-search-result';

  public declare searchResult: Record<string, unknown>;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(name: string, _: unknown, newValue: string) {
      if (name === 'search-result') {
          this.searchResult = JSON.parse(newValue);
          console.log(newValue);
      }
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <link rel="stylesheet" href="src/style.css" />

      <article class="dictionary-entry">
      <view-selector id="viewSelector" views-count='2'></view-selector>
      <div id="views">
        <div id="roots">
        </div>

        <div id="matches">
        </div>
      </div>
      </article>
      <hr>
      `;

      this.generateRootLines();
      this.generateMatches();

      this.clearViews();
      this.showView(0);
      const viewSelector = this.shadowRoot?.querySelector('#viewSelector') as HTMLElement;

      viewSelector.addEventListener('viewSelected', (event) => {
        const viewDiv = this.shadowRoot?.querySelector('#views') as HTMLDivElement;
        const viewsCount = viewDiv.children.length;
        const viewIndex = (event as CustomEvent).detail.index % viewsCount;

        this.clearViews();
        this.showView(viewIndex);
      });
  }
  showView(index: number) {
    const viewDiv = this.shadowRoot?.querySelector('#views') as HTMLDivElement;

   (viewDiv.children[index] as HTMLElement).style.display = 'block';
  }

  clearViews(){
    const viewDiv = this.shadowRoot?.querySelector('#views') as HTMLDivElement;

    for (const child of viewDiv.children) {
      (child as HTMLElement).style.display = 'none';
    }
  }


  generateRootLines() {
    const rootsDiv = this.shadowRoot?.querySelector('#roots') as HTMLDivElement;
    for (const line of this.searchResult.rootLines as []) {
      const newRoot = document.createElement('root-line');
      newRoot.setAttribute('line', JSON.stringify(line));

      rootsDiv.appendChild(newRoot);
    }

    const meaningsHtml = this.searchResult.meanings ? `
    <p>
        <em><small>Meanings:</small></em> ${(this.searchResult.meanings as []).join(';')}. &emsp;
    </p>
    ` : '';

    rootsDiv.innerHTML += meaningsHtml;
  }

  generateMatches() {
    const matchesDiv = this.shadowRoot?.querySelector('#matches') as HTMLDivElement;
    for (const match of this.searchResult.recordMatches as []) {
      const newMatch = document.createElement('word-match');
      newMatch.setAttribute('match', JSON.stringify(match));

      matchesDiv.appendChild(newMatch);
    }
  }

}

if (!window.customElements.get(LatinSearchResult.htmlName)) {
  window.customElements.define(LatinSearchResult.htmlName, LatinSearchResult);
}
