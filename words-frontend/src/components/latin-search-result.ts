
export class LatinSearchResult extends HTMLElement {
  public static htmlName = 'latin-search-result';
  classStyle = `

      /* Dictionary entry styling */
    .dictionary-entry {
      margin: 2rem 0;
      padding: 1rem 1.5rem;
      border-left: 4px solid var(--accent);
      background-color: color-mix(in srgb, var(--surface) 95%, var(--text) 5%);
      border-radius: 0.25rem;
    }

    .dictionary-entry h3 {
      font-family: var(--serif);
      font-size: 1.2rem;
      font-style: italic;
      margin-top: 0;
      margin-bottom: 0.25rem;
    }

    .dictionary-entry h3 abbr {
      font-variant: small-caps;
      font-style: normal;
      margin-left: 0.5rem;
      color: var(--muted);
    }

    .dictionary-entry p {
      margin: 0.25rem 0 0.75rem 0;
      line-height: 1.5;
    }

    .dictionary-entry ul {
      margin: 0.25rem 0 0.75rem 1.25rem;
      padding: 0;
      list-style-type: "";
    }

    .dictionary-entry blockquote {
      font-style: italic;
      margin: 0.5rem 0 0 1rem;
      padding-left: 1rem;
      border-left: 2px solid var(--muted);
      color: var(--muted);
    }


  small, figcaption, caption { font-size: var(--small); color: var(--ink-muted); }

      /* Dark mode refinement */
      @media (prefers-color-scheme: dark) {
        :root {
          --paper: #1f1c19;
          --paper-deckle: #161411;
          --ink: #f1ede3;
          --ink-muted: #cfc7b7;
          --accent: #86a8ff;
          --accent-muted: #a9befb;
          --rule: #3b362f;
          --line: #2b2723;
          --code-bg: #27231f;
        }
        body { background: linear-gradient(180deg, #1d1a17 0%, #151310 100%); }
        .book { background: #1a1714; box-shadow: none; outline-color: rgba(255,255,255,.04); }
        pre { background: #201d19; }
      }

    .one-line {
      display: flex;
    }
  `
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <link rel="stylesheet" href="src/style.css" />
      <style>
      ${this.classStyle}
      </style>


      <article class="dictionary-entry">
      <view-selector id="viewSelector" views-count='1'></view-selector>
      <div id="views">
        <div>
        <root-line roots='root, root, root' age='X' domain='X' frequency='X' region='D' region='O' source='R' meanings='meaning, meaning, meaning'></root-line>
        <root-line roots='root, root, root' age='X' domain='X' frequency='X' region='D' region='O' source='R' meanings='meaning, meaning, meaning'></root-line>
        <root-line roots='root, root, root' age='X' domain='X' frequency='X' region='D' region='O' source='R' meanings='meaning, meaning, meaning'></root-line>
        <root-line roots='root, root, root' age='X' domain='X' frequency='X' region='D' region='O' source='R' meanings='meaning, meaning, meaning'></root-line>
        </div>
      </div>
      </article>
      <hr>
      `;


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

}

if (!window.customElements.get(LatinSearchResult.htmlName)) {
  window.customElements.define(LatinSearchResult.htmlName, LatinSearchResult);
}
