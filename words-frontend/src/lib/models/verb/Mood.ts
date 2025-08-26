export type MoodValue = 'X' | 'IND' | 'SUB' | 'IMP' | 'INF' | 'PPL';

export class Mood {

    private static default = 'X';
    private static indicative = 'IND';
    private static subjunctive = 'SUB';
    private static imperative = 'IMP';
    private static infinitive = 'INF';
    private static participle = 'PPL';

    static getLongForm(value: MoodValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified mood');
            case this.indicative:
                return (!detailed?
                    'Indicative' :
                    'Indicative mood');
            case this.subjunctive:
                return (!detailed?
                    'Subjunctive' :
                    'Subjunctive mood');
            case this.imperative:
                return (!detailed?
                    'Imperative' :
                    'Imperative mood');
            case this.infinitive:
                return (!detailed?
                    'Infinitive' :
                    'Infinitive mood');
            case this.participle:
                return (!detailed?
                    'Participle' :
                    'Participle mood');
            default:
                throw new Error('Failed to match mood value');
        }
    }
}