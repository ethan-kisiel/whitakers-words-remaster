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
input, textarea, select {
  font: inherit;
  color: var(--ink);
  background: var(--paper);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: .55rem .7rem;
  width: 100%;
  transition: background .2s, border-color .2s, color .2s;
  margin: 5px;
}

textarea { min-height: 7rem; resize: vertical; }

input::placeholder, textarea::placeholder {
  color: var(--ink-muted);
}

button, input[type="submit"], input[type="button"], .btn {
  font: inherit;
  display: inline-block;
  padding: .55rem .7rem;
  border-radius: 8px;
  border: 1px solid var(--rule);
  background: var(--paper);
  color: var(--ink);
  cursor: pointer;
  transition: background .2s, border-color .2s, transform .05s, color .2s;
  margin: 5px;
}

button:hover, .btn:hover {
  background: var(--paper-deckle);
  border-color: var(--accent-muted);
}

button:active, .btn:active { transform: translateY(1px); }


.field {
  position: relative;
  display: inline-block;
  width: 100%;
}

.field input {
  border: 1px solid var(--rule, #ccc);
  border-radius: 6px;
  padding: .55rem .7rem;
  width: 100%;
  font: inherit;
  transition: border-color .2s, box-shadow .2s;
}

/* Highlighted (invalid) state */
.field input.too-long {
  border-color: goldenrod;
  box-shadow: 0 0 0 3px rgba(218,165,32,0.3);
}

/* Tooltip */
.field .tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: .3rem;
  padding: .3rem .5rem;
  background: goldenrod;
  color: white;
  font-size: .8rem;
  border-radius: 4px;
  white-space: nowrap;
  display: none; /* hidden by default */
}

/* Show tooltip when active */
.field input.too-long + .tooltip {
  display: inline-block;
}
}
    `

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <style>
            ${this.classStyle}
            </style>
            <div class="horizontal-align field">
                <input id="inputField">
                <span class="tooltip"></span>
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
            this.checkTooLong();
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

    checkTooLong() {
        const tooltip = this._inputField.nextElementSibling as HTMLSpanElement;
        const numberOfWords = this._inputField.value.trim().split(' ').length;
        if (numberOfWords > 10) {
            this._inputField.classList.add("too-long");
            tooltip.textContent = `Too many inputs, some will not be processed. (${numberOfWords}/10 max)`;
        }
        else {
            this._inputField.classList.remove("too-long");
            tooltip.textContent = "";
        }
    }
}

if (!window.customElements.get(InputFieldWithButton.htmlName)) {
  window.customElements.define(InputFieldWithButton.htmlName, InputFieldWithButton);
}