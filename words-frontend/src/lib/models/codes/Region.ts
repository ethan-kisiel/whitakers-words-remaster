export type RegionValue =
    'X' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' |
    'N' | 'P' | 'Q' | 'R' | 'S' | 'U';

export class Region {

    private static default = 'X';
    private static africa = 'A';
    private static britain = 'B';
    private static china = 'C';
    private static scandinavia = 'D';
    private static egypt = 'E';
    private static france = 'F';
    private static germany = 'G';
    private static greece = 'H';
    private static italy = 'I';
    private static india = 'J';
    private static balkans = 'K';
    private static netherlands = 'N';
    private static persia = 'P';
    private static nearEast = 'Q';
    private static russia = 'R';
    private static spain = 'S';
    private static easternEurope = 'U';

    static getLongForm(value: RegionValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'All or none');
            case this.africa:
                return (!detailed?
                    'Africa' :
                    'Africa');
            case this.britain:
                return (!detailed?
                    'Britain' :
                    'Britain');
            case this.china:
                return (!detailed?
                    'China' :
                    'China');
            case this.scandinavia:
                return (!detailed?
                    'Scandinavia' :
                    'Scandinavia');
            case this.egypt:
                return (!detailed?
                    'Egypt' :
                    'Egypt');
            case this.france:
                return (!detailed?
                    'France' :
                    'France, Gaul');
            case this.germany:
                return (!detailed?
                    'Germany' :
                    'Germany');
            case this.greece:
                return (!detailed?
                    'Greece' :
                    'Greece');
            case this.italy:
                return (!detailed?
                    'Italy' :
                    'Italy, Rome');
            case this.india:
                return (!detailed?
                    'India' :
                    'India');
            case this.balkans:
                return (!detailed?
                    'Balkans' :
                    'Balkans');
            case this.netherlands:
                return (!detailed?
                    'Netherlands' :
                    'Netherlands');
            case this.persia:
                return (!detailed?
                    'Persia' :
                    'Persia');
            case this.nearEast:
                return (!detailed?
                    'Near East' :
                    'Near East');
            case this.russia:
                return (!detailed?
                    'Russia' :
                    'Russia');
            case this.spain:
                return (!detailed?
                    'Spain' :
                    'Spain, Iberia');
            case this.easternEurope:
                return (!detailed?
                    'Eastern Europe' :
                    'Eastern Europe');
            default:
                return '';
        }
    }
}