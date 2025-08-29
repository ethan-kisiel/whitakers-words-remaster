export type AgeValue = 'X' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export class Age {


    private static default = 'X';
    private static archaic = 'A';
    private static early = 'B';
    private static classical = 'C';
    private static late = 'D';
    private static later = 'E';
    private static medieval = 'F';
    private static scholar = 'G';
    private static modern = 'H';

    static getLongForm(value: AgeValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'In use throughout the ages/unknown.');
            case this.archaic:
                return (!detailed?
                    'Archaic' :
                    'Very early forms, obsolete by classical times');
            case this.early:
                return (!detailed?
                    'Early' :
                    'Early Latin, pre-classical, used for effect/poetry');
            case this.classical:
                return (!detailed?
                    'Classical' :
                    'Limited to classical (~150 BC - 200 AD)');
            case this.late:
                return (!detailed?
                    'Late' :
                    'Late, post-classical (3rd-5th centuries)');
            case this.later:
                return (!detailed?
                    'Later' :
                    'Latin not in use in Classical times (6th-10th centuries) Christian');
            case this.medieval:
                return (!detailed?
                    'Medieval' :
                    'Medieval (11th-15th centuries)');
            case this.scholar:
                return (!detailed?
                    'Scholar' :
                    'Latin post 15th - Scholarly/Scientific (16th-18th centuries)'
                );
            case this.modern:
                return (!detailed?
                    'Modern' :
                    'Coined recently, words for new things (19th-21st centuries)'
                );
            default:
                return '';
        }
    }
}