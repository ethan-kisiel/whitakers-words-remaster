export type FrequencyValue = 'X' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'I' | 'M' | 'N';

export class Frequency {

    private static default = 'X';
    private static veryFrequent = 'A';
    private static frequent = 'B';
    private static common = 'C';
    private static lesser = 'D';
    private static uncommon = 'E';
    private static veryRare = 'F';
    private static inscription = 'I';
    private static graffiti = 'M';
    private static pliny = 'N';

    static getLongForm(value: FrequencyValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Unknown or unspecified');
            case this.veryFrequent:
                return (!detailed?
                    'Very Frequent' :
                    'Very frequent, in all Elementary Latin books, top 1000+ words');
            case this.frequent:
                return (!detailed?
                    'Frequent' :
                    'Frequent, next 2000+ words');
            case this.common:
                return (!detailed?
                    'Common' :
                    'For Dictionary, in top 10,000 words');
            case this.lesser:
                return (!detailed?
                    'Lesser' :
                    'For Dictionary, in top 20,000 words');
            case this.uncommon:
                return (!detailed?
                    'Uncommon' :
                    '2 or 3 citations');
            case this.veryRare:
                return (!detailed?
                    'Very Rare' :
                    'Having only single citation in OLD or L+S');
            case this.inscription:
                return (!detailed?
                    'Inscription' :
                    'Only citation is inscription');
            case this.graffiti:
                return (!detailed?
                    'Graffiti' :
                    'Presently not much used');
            case this.pliny:
                return (!detailed?
                    'Pliny' :
                    'Things that appear only in Pliny Natural History');
            default:
                return '';
        }
    }
}