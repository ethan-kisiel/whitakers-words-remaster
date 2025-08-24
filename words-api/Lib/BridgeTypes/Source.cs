// Project: words-api
// File: Source.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 23:08:24
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class Source
{
    public const string Default = "A"; // (Unspecified / reserved)
    public const string Beeson = "B"; // C.H. Beeson, A Primer of Medieval Latin, 1925 (Bee)
    public const string Cassell = "C"; // Charles Beard, Cassell's Latin Dictionary 1892 (CAS)
    public const string Adams = "D"; // J.N. Adams, Latin Sexual Vocabulary, 1982 (Sex)
    public const string Stelten = "E"; // L.F. Stelten, Dictionary of Eccles. Latin, 1995 (Ecc)
    public const string Deferrari = "F"; // Roy J. Deferrari, Dictionary of St. Thomas Aquinas, 1960 (DeF)
    public const string Gildersleeve = "G"; // Gildersleeve + Lodge, Latin Grammar 1895 (G+L)
    public const string Collatinus = "H"; // Collatinus Dictionary by Yves Ouvrard
    public const string Leverett = "I"; // Leverett, F.P., Lexicon of the Latin Language, Boston 1845
    public const string J = "J"; // (Unspecified / reserved)
    public const string Calepinus = "K"; // Calepinus Novus, modern Latin, by Guy Licoppe (Cal)
    public const string Lewis = "L"; // Lewis, C.S., Elementary Latin Dictionary 1891
    public const string Latham = "M"; // Latham, Revised Medieval Word List, 1980
    public const string Nelson = "N"; // Lynn Nelson, Wordlist
    public const string Oxford = "O"; // Oxford Latin Dictionary, 1982 (OLD)
    public const string Souter = "P"; // Souter, A Glossary of Later Latin to 600 A.D., Oxford 1949
    public const string Other = "Q"; // Other, cited or unspecified dictionaries
    public const string PlaterWhite = "R"; // Plater & White, A Grammar of the Vulgate, Oxford 1926
    public const string LewisShort = "S"; // Lewis and Short, A Latin Dictionary, 1879 (L+S)
    public const string Translation = "T"; // Found in a translation -- no dictionary reference
    public const string DuCange = "U"; // Du Cange
    public const string Vademecum = "V"; // Vademecum in opus Saxonis - Franz Blatt (Saxo)
    public const string Guess = "W"; // My personal guess
    public const string Temp = "Y"; // Temp special code
    public const string User = "Z"; // Sent by user -- no dictionary reference

    // X,      --  General or unknown or too common to say
    // A,
    // B,      --  C.H.Beeson, A Primer of Medieval Latin, 1925 (Bee)
    // C,      --  Charles Beard, Cassell's Latin Dictionary 1892 (CAS)
    // D,      --  J.N.Adams, Latin Sexual Vocabulary, 1982 (Sex)
    // E,      --  L.F.Stelten, Dictionary of Eccles. Latin, 1995 (Ecc)
    // F,      --  Roy J. Deferrari, Dictionary of St. Thomas Aquinas, 1960 (DeF)
    // G,      --  Gildersleeve + Lodge, Latin Grammar 1895 (G+L)
    // H,      --  Collatinus Dictionary by Yves Ouvrard
    // I,      --  Leverett, F.P., Lexicon of the Latin Language, Boston 1845
    // J,
    // K,      --  Calepinus Novus, modern Latin, by Guy Licoppe (Cal)
    // L,      --  Lewis, C.S., Elementary Latin Dictionary 1891
    // M,      --  Latham, Revised Medieval Word List, 1980
    // N,      --  Lynn Nelson, Wordlist
    // O,      --  Oxford Latin Dictionary, 1982 (OLD)
    // P,      --  Souter, A Glossary of Later Latin to 600 A.D., Oxford 1949
    // Q,      --  Other, cited or unspecified dictionaries
    // R,      --  Plater & White, A Grammar of the Vulgate, Oxford 1926
    // S,      --  Lewis and Short, A Latin Dictionary, 1879 (L+S)
    // T,      --  Found in a translation  --  no dictionary reference
    // U,      --  Du Cange
    // V,      --  Vademecum in opus Saxonis - Franz Blatt (Saxo)
    // W,      --  My personal guess
    // Y,      --  Temp special code
    // Z       --  Sent by user --  no dictionary reference
}