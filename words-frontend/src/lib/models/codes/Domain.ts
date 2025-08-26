export type DomainValue = 'X' | 'A' | 'B' | 'D' | 'E' | 'G' | 'L' | 'P' | 'S' | 'T' | 'W' | 'M';

export class Domain {

    private static default = 'X';
    private static agriculture = 'A';
    private static medical = 'B';
    private static arts = 'D';
    private static religious = 'E';
    private static scholarly = 'G';
    private static law = 'L';
    private static poetry = 'P';
    private static science = 'S';
    private static technology = 'T';
    private static military = 'W';
    private static mythology = 'M';

    static getLongForm(value: DomainValue, detailed=false): string {
        switch (value) {
            case this.default:
                return (!detailed?
                    'Unknown' :
                    'All or none');
            case this.agriculture:
                return (!detailed?
                    'Agriculture' :
                    'Agriculture, Flora, Fauna, Land, Equipment, Rural');
            case this.medical:
                return (!detailed?
                    'Medical' :
                    'Biological, Medical, Body Parts');
            case this.arts:
                return (!detailed?
                    'Arts' :
                    'Drama, Music, Theater, Art, Painting, Sculpture');
            case this.religious:
                return (!detailed?
                    'Religious' :
                    'Ecclesiastic, Biblical, Religious');
            case this.scholarly:
                return (!detailed?
                    'Scholarly' :
                    'Grammar, Rhetoric, Logic, Literature, Schools');
            case this.law:
                return (!detailed?
                    'Law' :
                    'Legal, Government, Tax, Financial, Political, Titles');
            case this.poetry:
                return (!detailed?
                    'Poetry' :
                    'Poetic');
            case this.science:
                return (!detailed?
                    'Science' :
                    'Science, Philosophy, Mathematics, Units/Measures');
            case this.technology:
                return (!detailed?
                    'Technology' :
                    'Technical, Architecture, Topography, Surveying');
            case this.military:
                return (!detailed?
                    'Military' :
                    'War, Military, Naval, Ships, Armor');
            case this.mythology:
                return (!detailed?
                    'Mythology' :
                    'Mythology');
            default:
                throw new Error('Failed to match domain value');
        }
    }
}