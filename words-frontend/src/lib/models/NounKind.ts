export type NounKindValue = 'X' | 'S' | 'M' | 'A' | 'G' | 'N' | 'P' | 'T' | 'L' | 'W';

export class NounKind {

    private static default = 'X';
    private static singular = 'S';
    private static plural = 'M';
    private static abstractIdea = 'A';
    private static group = 'G';
    private static name = 'N';
    private static person = 'P';
    private static thing = 'T';
    private static locale = 'L';
    private static placeWhere = 'W';

    static getLongForm(value: NounKindValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Unknown, nondescript');
            case this.singular:
                return (!detailed?
                    'Singular' :
                    'Singular "only" (not really used)');
            case this.plural:
                return (!detailed?
                    'Plural' :
                    'Plural or Multiple "only" (not really used)');
            case this.abstractIdea:
                return (!detailed?
                    'Abstract Idea' :
                    'Abstract idea');
            case this.group:
                return (!detailed?
                    'Group' :
                    'Group/collective Name — Roman(s)');
            case this.name:
                return (!detailed?
                    'Name' :
                    'Proper name');
            case this.person:
                return (!detailed?
                    'Person' :
                    'A person');
            case this.thing:
                return (!detailed?
                    'Thing' :
                    'A thing');
            case this.locale:
                return (!detailed?
                    'Locale' :
                    'Locale, name of country/city');
            case this.placeWhere:
                return (!detailed?
                    'Place Where' :
                    'A place where');
            default:
                return '';
        }
    }
}