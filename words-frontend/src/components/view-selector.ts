export class ViewSelector extends HTMLElement {
    public static observedAttributes = ['views-count'];
    public static htmlName = 'view-selector';

    private viewsCount = 0;

    classStyle = `
    /* The dots/bullets/indicators */
        .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
        background-color: #717171;
        }

        /* Fading animation */
        .fade {
        animation-name: fade;
        animation-duration: 1.5s;
        }

        @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
        }
    `

    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        this.shadowRoot!.innerHTML = `
        <style>
        ${this.classStyle}
        </style>
        `;
    }

    attributeChangedCallback(name: string, oldValue: unknown, newValue: string) {
        if (name === 'views-count') {
            this.viewsCount = parseInt(newValue);
        }
    }

    connectedCallback() {
        this.addDots();
        this.setDotCallbacks();
    }

    addDots() {
        this.shadowRoot!.innerHTML += `<!-- The dots/circles -->
        <div style="text-align:center" id='dotsContainer'>
        ${this.getDotsHtml(this.viewsCount)}
        </div>`;
    }

    getDotsHtml(dotsCount: number) {
        let dotsHtml = `\<span class="dot active"\> \<\/span\>`;

        for (let i = 1; i < dotsCount; i++) {
            dotsHtml = `${dotsHtml}
            \<span class="dot"\> \<\/span\>`;
        }

        return dotsHtml;
    }

    setDotCallbacks() {
        const dotsContainer = this.shadowRoot!.querySelector('#dotsContainer') as HTMLDivElement;


        for ( const element of dotsContainer.children ) {
            element.addEventListener('click', () => {
                this.clearDotSelection();
                this.emitNewViewSelected([...dotsContainer.children].indexOf(element));
                element.className += ' active';
            });
        }

        this.emitNewViewSelected(0);
    }

    clearDotSelection() {
        const dotsContainer = this.shadowRoot!.querySelector('#dotsContainer') as HTMLDivElement;

        for ( const element of dotsContainer.children ) {
            element.className = element.className = 'dot';
        }
    }

    emitNewViewSelected(index: number) {
        console.log(index);
        const event = new CustomEvent('viewSelected', {
            bubbles: true,
            cancelable: true,
            detail: { index: index }
        });

        this.dispatchEvent(event);
    }


}



if (!window.customElements.get(ViewSelector.htmlName)) {
  window.customElements.define(ViewSelector.htmlName, ViewSelector);
}