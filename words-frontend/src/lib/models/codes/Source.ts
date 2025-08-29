export type SourceValue =
    'X' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' |
    'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' |
    'Y' | 'Z';

export class Source {

    private static general = 'X';
    private static unspecified = 'A';
    private static beeson = 'B';
    private static cassell = 'C';
    private static adams = 'D';
    private static stelten = 'E';
    private static deferrari = 'F';
    private static gildersleeve = 'G';
    private static collatinus = 'H';
    private static leverett = 'I';
    private static bracton = 'J';
    private static calepinus = 'K';
    private static lewis = 'L';
    private static latham = 'M';
    private static nelson = 'N';
    private static oxford = 'O';
    private static souter = 'P';
    private static other = 'Q';
    private static platerWhite = 'R';
    private static lewisShort = 'S';
    private static translation = 'T';
    private static u = 'U';
    private static vademecum = 'V';
    private static guess = 'W';
    private static temp = 'Y';
    private static user = 'Z';

    static getLongForm(value: SourceValue, detailed=false): string {
        switch (value) {
            case this.general:
                return 'General or unknown or too common to say';
            case this.unspecified:
                return 'Unspecified';
            case this.beeson:
                return (!detailed ?
                    'Beeson' :
                    'C.H. Beeson, A Primer of Medieval Latin, 1925 (Bee)');
            case this.cassell:
                return (!detailed ?
                    'Cassell' :
                    'Charles Beard, Cassell\'s Latin Dictionary 1892 (Cas)');
            case this.adams:
                return (!detailed ?
                    'Adams' :
                    'J.N. Adams, Latin Sexual Vocabulary, 1982 (Sex)');
            case this.stelten:
                return (!detailed ?
                    'Stelten' :
                    'L.F. Stelten, Dictionary of Ecclesiastical Latin, 1995 (Ecc)');
            case this.deferrari:
                return (!detailed ?
                    'Deferrari' :
                    'Roy J. Deferrari, Dictionary of St. Thomas Aquinas, 1960 (DeF)');
            case this.gildersleeve:
                return (!detailed ?
                    'Gildersleeve' :
                    'Gildersleeve + Lodge, Latin Grammar 1895 (G+L)');
            case this.collatinus:
                return (!detailed ?
                    'Collatinus' :
                    'Collatinus Dictionary by Yves Ouvrard');
            case this.leverett:
                return (!detailed ?
                    'Leverett' :
                    'Leverett, F.P., Lexicon of the Latin Language, Boston 1845');
            case this.bracton:
                return (!detailed ?
                    'Bracton' :
                    'Bracton: De Legibus Et Consuetudinibus Angliae');
            case this.calepinus:
                return (!detailed ?
                    'Calepinus' :
                    'Calepinus Novus, modern Latin, by Guy Licoppe (Cal)');
            case this.lewis:
                return (!detailed ?
                    'Lewis' :
                    'Lewis, C.S., Elementary Latin Dictionary 1891');
            case this.latham:
                return (!detailed ?
                    'Latham' :
                    'Latham, Revised Medieval Word List, 1980 (Latham)');
            case this.nelson:
                return (!detailed ?
                    'Nelson' :
                    'Lynn Nelson, Wordlist (Nel)');
            case this.oxford:
                return (!detailed ?
                    'Oxford' :
                    'Oxford Latin Dictionary, 1982 (OLD)');
            case this.souter:
                return (!detailed ?
                    'Souter' :
                    'Souter, A Glossary of Later Latin to 600 A.D., Oxford 1949');
            case this.other:
                return (!detailed ?
                    'Other' :
                    'Other, cited or unspecified dictionaries');
            case this.platerWhite:
                return (!detailed ?
                    'Plater & White' :
                    'Plater & White, A Grammar of the Vulgate, Oxford 1926 (Plater)');
            case this.lewisShort:
                return (!detailed ?
                    'Lewis & Short' :
                    'Lewis and Short, A Latin Dictionary, 1879 (L+S)');
            case this.translation:
                return (!detailed ?
                    'Translation' :
                    'Found in a translation — no dictionary reference');
            case this.u:
                return 'U (unspecified)';
            case this.vademecum:
                return (!detailed ?
                    'Vademecum' :
                    'Vademecum in opus Saxonis — Franz Blatt (Saxo)');
            case this.guess:
                return (!detailed ?
                    'Guess' :
                    'My personal guess, mostly obvious extrapolation (Whitaker)');
            case this.temp:
                return (!detailed ?
                    'Temp' :
                    'Temp special code');
            case this.user:
                return (!detailed ?
                    'User' :
                    'Sent by user — no dictionary reference, mostly John White of Blitz Latin');
            default:
                return 'General or unknown or too common to say';
        }
    }
}