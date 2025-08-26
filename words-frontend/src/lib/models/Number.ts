export type NumberValue = 'X' | 'S' | 'P';

export class Number {

    private static default = 'X';
    private static singular = 'S';
    private static plural = 'P';

    static getLongForm(value: NumberValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified number');
            case this.singular:
                return (!detailed?
                    'Singular' :
                    'Singular number');
            case this.plural:
                return (!detailed?
                    'Plural' :
                    'Plural number');
            default:
                throw new Error('Failed to match number value');
        }
    }
}