// Project: words-api
// File: PronounKind.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 22:08:44
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class PronounKind
{
    public const string Default = "X";
    public const string Personal = "PERS";
    public const string Relative = "REL";
    public const string Reflexive = "REFLEX";
    public const string Demonstrative = "DEMONS";
    public const string Interrogative = "INTERR";
    public const string Indefinite = "INDEF";
    public const string Adjectival = "ADJECT";

    // X,      --  unknown, nondescript
    // Pers,   --  PERSonal
    // Rel,    --  RELative
    // Reflex, --  REFLEXive
    // Demons, --  DEMONStrative
    // Interr, --  INTERRogative
    // Indef,  --  INDEFinite
    // Adject  --  ADJECTival
}