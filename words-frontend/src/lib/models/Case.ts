export type CaseValue = 'X' | 'NOM' | 'VOC' | 'GEN' | 'LOC' | 'DAT' | 'ABL' | 'ACC';

export class Case {
    private static default = 'X';
    private static nominative = 'NOM';
    private static vocative = 'VOC';
    private static genitive = 'GEN';
    private static locative = 'LOC';
    private static dative = 'DAT';
    private static ablative = 'ABL';
    private static accusative = 'ACC';

    static getLongForm(value: CaseValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'unspecified/unknown'
                );
            case this.nominative:
                return (!detailed?
                    'Nominative' :
                    'primarily functions to mark the subject of a verb'
                );
            case this.vocative:
                return (!detailed?
                    'Vocative':
                    'used for direct address, functioning as the person being spoken to'
                );
            case this.genitive:
                return (!detailed?
                    'Genitive':
                    'primarily expresses a relationship between nouns, indicating possession, description, or a part-whole relationship'
                );
            case this.locative:
                return (!detailed?
                    'Locative':
                    'only used for the names of cities, "small" islands and a few other isolated words'
                );
            case this.dative:
                return (!detailed?
                    'Dative':
                    'primarily functions as the indirect object of a verb, indicating the recipient or beneficiary of an action'
                );
            case this.ablative:
                return (!detailed?
                    'Ablative' :
                    'a versatile grammatical case with various uses, often conveying concepts of "from," "with," or "by" in English'
                );
            case this.accusative:
                return (!detailed?
                    'Accusative':
                    'primarily marks the direct object of a verb, indicating the entity upon which the action of the verb is performed'
                );
            default:
                throw new Error('Failed to match age value');
        }
    }
}