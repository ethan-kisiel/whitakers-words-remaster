// Project: words-api
// File: NounKind.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 22:08:10
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class NounKind
{
    public const string Default = "X";
    public const string Singular = "S";
    public const string Plural = "M";
    public const string AbstractIdea = "A";
    public const string Group = "G";
    public const string Name = "N";
    public const string Person = "P";
    public const string Thing = "T";
    public const string Locale = "L";
    public const string PlaceWhere = "W";

    // X, --  unknown, nondescript
    // S,  --  Singular "only"           --  not really used
    // M,  --  plural or Multiple "only" --  not really used
    // A,  --  Abstract idea
    // G,  --  Group/collective Name -- Roman(s)
    // N,  --  proper Name
    // P,  --  a Person
    // T,  --  a Thing
    // L,  --  Locale, name of country/city
    // W   --  a place Where
}