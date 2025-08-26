export type TenseValue = 'X' | 'PRES' | 'IMPF' | 'FUT' | 'PERF' | 'PLUP' | 'FUTP';

export class Tense {
    private static default = "X";
    private static present = "PRES";
    private static imperfect = "IMPF";
    private static future = "FUT";
    private static perfect = "PERF";
    private static pluperfect = "PLUP";
    private static futurePerfect = "FUTP";

    static getLongForm(value: TenseValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified');
            case this.present:
                return (!detailed?
                    'Present' :
                    'Present');
            case this.imperfect:
                return (!detailed?
                    'Imperfect' :
                    'Imperfect');
            case this.future:
                return (!detailed?
                    'Future' :
                    'Future'
                );
            case this.perfect:
                return (!detailed?
                    'Perfect' :
                    'Perfect'
                );
            case this.pluperfect:
                return (!detailed?
                    'Pluperfect' :
                    'Pluperfect'
                );
            case this.futurePerfect:
                return (!detailed?
                    'Future Perfect' :
                    'Future Perfect'
                );
            default:
                throw new Error('Failed to match number value');
        }
    }
}