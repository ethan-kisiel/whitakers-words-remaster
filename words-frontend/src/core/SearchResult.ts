export default abstract class SearchResult extends HTMLElement {
    private static _removeEventName = 'removeSearchResult';
    public static declare htmlName: string;

    public static observedAttributes = ['search-result', 'unique-id'];

    protected declare _searchResult: Record<string, unknown>;

    constructor() {
        super();
    }

    attributeChangedCallback(name: string, _: unknown, newValue: string) {
        if (name === 'search-result') {
            this._searchResult = JSON.parse(newValue);
        }
        if (name === 'unique-id') {
            this.id = newValue;
        }
    }

    emitRemoveEvent() {
        const event = new CustomEvent(SearchResult._removeEventName, {
            bubbles: true,
            cancelable: true,
            detail: { uniqueId: this.id }
        });

        this.dispatchEvent(event);
    }
}