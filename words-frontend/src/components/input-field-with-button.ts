export class InputFieldWithButton extends HTMLElement {
    public static htmlName = 'input-field-with-button';
    public static submittedEventName = 'inputSubmitted';

    declare private _inputField: HTMLInputElement;

    classStyle = `
        div.horizontal-align {
            display: flex;
            justify-content: space-between;
            align-items: normal;
        }
        label { display: inline-block; margin: .4rem 0 .2rem; }
        input, textarea, select {
        font: inherit;
        color: inherit;
        background: #fff;
        border: 1px solid var(--rule);
        border-radius: 6px;
        padding: .55rem .7rem;
        width: 100%;
        transition: background .2s, border-color .2s;
        }
        textarea { min-height: 7rem; resize: vertical; }
        fieldset {
        border: 1px solid var(--rule);
        border-radius: 8px;
        padding: var(--space-3);
        margin: var(--space-3) 0;
        }

        button, input {
        margin: 2.5px;
        }
        button, input[type="submit"], input[type="button"], .btn {
        font: inherit;
        display: inline-block;
        padding: .55rem .7rem;
        border-radius: 8px;
        border: 1px solid var(--rule);
        background: #fff;
        cursor: pointer;
        transition: background .2s, border-color .2s, transform .05s;
        }

        button:hover, .btn:hover {
        background: #f0ebe0;
        border-color: var(--accent-muted);
        }
        button:active, .btn:active { transform: translateY(1px); }

        pre { background: #201d19; }
        input, textarea, select {
            background: #2a2622;
            border-color: var(--rule);
            color: var(--ink);
        }
        button, input[type="submit"], input[type="button"], .btn {
            background: #2a2622;
            color: var(--ink);
            border-color: var(--rule);
        }
        button:hover, .btn:hover { background: #33302b; border-color: var(--accent-muted); }
    `

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
            ${this.classStyle}
            </style>
            <div class="horizontal-align">
                <input>
                <button>Search</button>
            </div>
        `;
    }

    connectedCallback() {
        this._inputField = this.shadowRoot?.querySelector('input') as HTMLInputElement;

        const button = this.shadowRoot?.querySelector('button') as HTMLButtonElement;

        button.addEventListener('click', (_) => {
            this.emitCommitInput(this._inputField.value);
            this._inputField.value = '';
        });

        this._inputField.addEventListener('keydown', (ev: KeyboardEvent) => {
            if (ev.code === 'Enter') {
                this.emitCommitInput(this._inputField.value);
                this._inputField.value = '';
            }
        });
    }

    emitCommitInput(value: string) {
        const event = new CustomEvent(InputFieldWithButton.submittedEventName, {
            bubbles: true,
            cancelable: true,
            detail: { value: value }
        });

        this.dispatchEvent(event);
    }
}

if (!window.customElements.get(InputFieldWithButton.htmlName)) {
  window.customElements.define(InputFieldWithButton.htmlName, InputFieldWithButton);
}