// Project: words-api
// File: Frequency.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 23:08:39
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class Frequency
{
    public const string Default = "X";
    public const string VeryFrequent = "A";
    public const string Frequent = "B";
    public const string Common = "C";
    public const string Lesser = "D";
    public const string Uncommon = "E";
    public const string VeryRare = "F";
    public const string Inscription = "I";
    public const string Graffiti = "M";
    public const string Pliny = "N";

    // X,    --              --  Unknown or unspecified
    // A,    --  very freq   --  Very frequent, in all Elementary Latin books, top 1000+ words
    // B,    --  frequent    --  Frequent, next 2000+ words
    // C,    --  common      --  For Dictionary, in top 10,000 words
    // D,    --  lesser      --  For Dictionary, in top 20,000 words
    // E,    --  uncommon    --  2 or 3 citations
    // F,    --  very rare   --  Having only single citation in OLD or L+S
    // I,    --  inscription --  Only citation is inscription
    // M,    --  graffiti    --  Presently not much used
    // N     --  Pliny       --  Things that appear only in Pliny Natural History
}