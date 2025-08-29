export type ComparisonValue = 'X' | 'POS' | 'COMP' | 'SUP';

export class Comparison {

    private static default = 'X';
    private static positive = 'POS';
    private static comparative = 'COMP';
    private static superlative = 'SUP';

    static getLongForm(value: ComparisonValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified comparison');
            case this.positive:
                return (!detailed?
                    'Positive' :
                    'Positive degree');
            case this.comparative:
                return (!detailed?
                    'Comparative' :
                    'Comparative degree');
            case this.superlative:
                return (!detailed?
                    'Superlative' :
                    'Superlative degree');
            default:
                return '';
        }
    }
}