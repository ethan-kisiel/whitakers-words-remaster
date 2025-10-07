const classStyle = `
/* =====================================================================
   Snackbar (Stacked) — theme-textbook-snackbar.css
   Fits seamlessly with theme-textbook.css
   ===================================================================== */

/* Individual snackbar */
.snackbar {
  background: var(--surface);
  color: var(--ink);
  font-family: var(--sans);
  font-size: var(--small);
  line-height: 1.5;
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--rule);
  border-radius: 10px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.18);

  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  opacity: 0;
  transform: translateY(-20%);
  pointer-events: auto;

  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Active (visible) state */
/* Individual snackbar */
.snackbar {
  background: var(--surface);
  color: var(--ink);
  font-family: var(--sans);
  font-size: var(--small);
  line-height: 1.5;
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--rule);
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 80%;
  opacity: 0;
  transform: translateY(-10%);
  pointer-events: auto;

  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Active (visible) state */
.snackbar.show {
  opacity: 1;
  transform: translateY(0);
}

/* Variants (info, success, warning, error) */
.snackbar.info {
  border-left: 4px solid var(--accent);
}

.snackbar.success {
  border-left: 4px solid #4caf50;
}

.snackbar.warning {
  border-left: 4px solid #ffb300;
}

.snackbar.error {
  border-left: 4px solid #d32f2f;
}

/* Snackbar message text */
.snackbar__message {
  flex: 1;
}

/* Close button */
.snackbar__close {
  background: none;
  border: none;
  color: var(--ink-muted);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
}

.snackbar__close:hover {
  color: var(--accent);
  background: var(--paper-deckle);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .snackbar-container {
    background: #1a1714;
    border-color: var(--rule);
  }

  .snackbar {
    background: #2a2622;
    color: var(--ink);
    border-color: var(--rule);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  }

  .snackbar__close:hover {
    background: #33302b;
  }
}
`;
export type SnackMessageType = 'info' | 'success' | 'warning' | 'error';
export class Snack extends HTMLElement {
public static observedAttributes = ['type', 'message'];
  public static htmlName = 'snack-component';

  private type: SnackMessageType = 'error';
  private message: string  = '';


  constructor() {
    super();
  }


  attributeChangedCallback(name: string, _: unknown, newValue: string) {
    if (name === 'type') {
        this['type']
        this.type = newValue as SnackMessageType;
    }

    if (name === 'message') {
        this.message = newValue;
    }
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    ${classStyle}
    </style>
    <div id='snack' class='snackbar ${this.type}'>
    <div class="snackbar__message">
        ${this.message}
    </div>
    </div>
    `
    this.show();
    setTimeout(() => {this.hide()}, 3000);
  }



  private show() {
    requestAnimationFrame(() => this.querySelector('#snack')?.classList.add("show"));
  }

  private hide() {
    this.querySelector('#snack')?.classList.remove("show");
    this.querySelector('#snack')?.addEventListener("transitionend", () => this.remove());
  }
}

if (!window.customElements.get(Snack.htmlName)) {
  window.customElements.define(Snack.htmlName, Snack);
}