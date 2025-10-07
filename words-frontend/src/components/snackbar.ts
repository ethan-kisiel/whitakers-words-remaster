import { Snack, type SnackMessageType } from "./snack";

export class Snackbar extends HTMLElement {
  public static htmlName = 'snackbar-component';

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
    <style>
    /* Container now takes up space in layout */
    .snackbar-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: var(--space-2);

      /* Reserve vertical space for up to 3 snackbars */
      min-height: calc(var(--space-5) * 5);
      max-height: calc(var(--space-6) * 2.5);
      overflow: hidden;
      padding: var(--space-3) 0;

      width: 100%;
      margin: 0 auto var(--space-4);
      box-sizing: border-box;

      /* Optional: subtle separation from content */
      border-top: 1px solid var(--rule);
      border-bottom: 1px solid var(--rule);
      background: var(--surface);
    }
    </style>
    <div id='snackbar-container'>

    </div>
    `
  }


  connectedCallback() {
  }


  public addSnack(message: string, type: SnackMessageType ) {
    const snackbarContainer = this.shadowRoot?.querySelector('#snackbar-container') as HTMLDivElement;
    const snack = document.createElement(Snack.htmlName);
    snack.setAttribute('type', type);
    snack.setAttribute('message', message);

    snackbarContainer.appendChild(snack);
  }
}

if (!window.customElements.get(Snackbar.htmlName)) {
  window.customElements.define(Snackbar.htmlName, Snackbar);
}