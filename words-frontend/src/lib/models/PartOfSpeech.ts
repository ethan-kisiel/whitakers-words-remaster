export type PartsOfSpeechValue =
    'X' | 'N' | 'PRON' | 'PACKON' | 'ADJ' | 'NUM' | 'ADV' | 'V' | 'VPAR' |
    'SUPINE' | 'PREP' | 'CONJ' | 'INTERJ' | 'TACKON' | 'PREFIX' | 'SUFFIX';

export class PartsOfSpeech {

    private static default = 'X';
    private static noun = 'N';
    private static pronoun = 'PRON';
    private static packon = 'PACKON';
    private static adjective = 'ADJ';
    private static number = 'NUM';
    private static adverb = 'ADV';
    private static verb = 'V';
    private static verbParticiple = 'VPAR';
    private static supine = 'SUPINE';
    private static preposition = 'PREP';
    private static conjunction = 'CONJ';
    private static interjection = 'INTERJ';
    private static tackon = 'TACKON';
    private static prefix = 'PREFIX';
    private static suffix = 'SUFFIX';

    static getLongForm(value: PartsOfSpeechValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified part of speech');
            case this.noun:
                return (!detailed?
                    'Noun' :
                    'Noun');
            case this.pronoun:
                return (!detailed?
                    'Pronoun' :
                    'Pronoun');
            case this.packon:
                return (!detailed?
                    'Packon' :
                    'Packon');
            case this.adjective:
                return (!detailed?
                    'Adjective' :
                    'Adjective');
            case this.number:
                return (!detailed?
                    'Number' :
                    'Number');
            case this.adverb:
                return (!detailed?
                    'Adverb' :
                    'Adverb');
            case this.verb:
                return (!detailed?
                    'Verb' :
                    'Verb');
            case this.verbParticiple:
                return (!detailed?
                    'Verb Participle' :
                    'Verb participle');
            case this.supine:
                return (!detailed?
                    'Supine' :
                    'Supine');
            case this.preposition:
                return (!detailed?
                    'Preposition' :
                    'Preposition');
            case this.conjunction:
                return (!detailed?
                    'Conjunction' :
                    'Conjunction');
            case this.interjection:
                return (!detailed?
                    'Interjection' :
                    'Interjection');
            case this.tackon:
                return (!detailed?
                    'Tackon' :
                    'Tackon');
            case this.prefix:
                return (!detailed?
                    'Prefix' :
                    'Prefix');
            case this.suffix:
                return (!detailed?
                    'Suffix' :
                    'Suffix');
            default:
                return '';
        }
    }
}