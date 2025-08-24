// Project: words-api
// File: Domain.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 23:08:45
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class Domain
{
    public const string Default = "X";
    public const string Agriculture = "A";
    public const string Medical = "B";
    public const string Arts = "D";
    public const string Religious = "E";
    public const string Scholarly = "G";
    public const string Law = "L";
    public const string Poetry = "P";
    public const string Science = "S";
    public const string Technology = "T";
    public const string Military = "W";
    public const string Mythology = "M";

    // X,      --  All or none
    // A,      --  Agriculture, Flora, Fauna, Land, Equipment, Rural
    // B,      --  Biological, Medical, Body Parts
    // D,      --  Drama, Music, Theater, Art, Painting, Sculpture
    // E,      --  Ecclesiastic, Biblical, Religious
    // G,      --  Grammar, Rhetoric, Logic, Literature, Schools
    // L,      --  Legal, Government, Tax, Financial, Political, Titles
    // P,      --  Poetic
    // S,      --  Science, Philosophy, Mathematics, Units/Measures
    // T,      --  Technical, Architecture, Topography, Surveying
    // W,      --  War, Military, Naval, Ships, Armor
    // Y       --  Mythology
}