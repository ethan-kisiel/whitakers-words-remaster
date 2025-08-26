export type NumeralSortValue = 'X' | 'CARD' | 'ORD' | 'DIST' | 'ADVERB';

export class NumeralSort {

    private static default = 'X';
    private static cardinal = 'CARD';
    private static ordinal = 'ORD';
    private static distributive = 'DIST';
    private static adverb = 'ADVERB';

    static getLongForm(value: NumeralSortValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified numeral sort');
            case this.cardinal:
                return (!detailed?
                    'Cardinal' :
                    'Cardinal numeral');
            case this.ordinal:
                return (!detailed?
                    'Ordinal' :
                    'Ordinal numeral');
            case this.distributive:
                return (!detailed?
                    'Distributive' :
                    'Distributive numeral');
            case this.adverb:
                return (!detailed?
                    'Adverb' :
                    'Adverbial numeral');
            default:
                throw new Error('Failed to match numeral sort value');
        }
    }
}