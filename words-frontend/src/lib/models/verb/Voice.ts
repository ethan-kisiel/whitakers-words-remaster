export type VoiceKind = 'X' | 'ACTIVE' | 'PASSIVE';

export class Voice {

    private static default = 'X';
    private static active = 'ACTIVE';
    private static passive = 'PASSIVE';

    static getLongForm(value: VoiceKind, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'Default/unspecified');
            case this.active:
                return (!detailed?
                    'Active' :
                    'Active');
            case this.passive:
                return (!detailed?
                    'Passive' :
                    'Passive');
            default:
                throw new Error('Failed to match voice value');
        }
    }
}