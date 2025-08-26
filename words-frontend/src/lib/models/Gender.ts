export type GenderValue = 'X' | 'M' | 'F' | 'N' | 'C';

export class Gender {

    private static default = 'X';
    private static masculine = 'M';
    private static feminine = 'F';
    private static neuter = 'N';
    private static common = 'C';

    static getLongForm(value: GenderValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified gender');
            case this.masculine:
                return (!detailed?
                    'Masculine' :
                    'Masculine gender');
            case this.feminine:
                return (!detailed?
                    'Feminine' :
                    'Feminine gender');
            case this.neuter:
                return (!detailed?
                    'Neuter' :
                    'Neuter gender');
            case this.common:
                return (!detailed?
                    'Common' :
                    'Common gender (masculine or feminine)');
            default:
                throw new Error('Failed to match gender value');
        }
    }
}