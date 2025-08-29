export type PronounKindValue =
    'X' | 'PERS' | 'REL' | 'REFLEX' | 'DEMONS' | 'INTERR' | 'INDEF' | 'ADJECT';

export class PronounKind {

    private static default = 'X';
    private static personal = 'PERS';
    private static relative = 'REL';
    private static reflexive = 'REFLEX';
    private static demonstrative = 'DEMONS';
    private static interrogative = 'INTERR';
    private static indefinite = 'INDEF';
    private static adjectival = 'ADJECT';

    static getLongForm(value: PronounKindValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified pronoun kind');
            case this.personal:
                return (!detailed?
                    'Personal' :
                    'Personal pronoun');
            case this.relative:
                return (!detailed?
                    'Relative' :
                    'Relative pronoun');
            case this.reflexive:
                return (!detailed?
                    'Reflexive' :
                    'Reflexive pronoun');
            case this.demonstrative:
                return (!detailed?
                    'Demonstrative' :
                    'Demonstrative pronoun');
            case this.interrogative:
                return (!detailed?
                    'Interrogative' :
                    'Interrogative pronoun');
            case this.indefinite:
                return (!detailed?
                    'Indefinite' :
                    'Indefinite pronoun');
            case this.adjectival:
                return (!detailed?
                    'Adjectival' :
                    'Adjectival pronoun');
            default:
                return '';
        }
    }
}