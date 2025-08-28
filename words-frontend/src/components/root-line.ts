export class RootLine extends HTMLElement {
    public static htmlName = 'root-line';

    private declare roots: string;
    private declare meanings: string;
    private declare partOfSpeech: string;
    private gender?: string;
    private version?: string;



    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <h3><em>bos, bovis</em> <abbr title="Masculine">m.</abbr>, Noun</h3>
          <p>
            <strong>Meanings:</strong> ox; bull cow; ox-ray; cattle (pl.); (ox-like animals); [luca ~ =\u003E elephant].
          </p>
        `;
    }
}

if (!window.customElements.get(RootLine.htmlName)) {
  window.customElements.define(RootLine.htmlName, RootLine);
}
