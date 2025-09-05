// Project: words-api
// File: Case.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 14:08:15
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class CaseType
{
    public const string Default = "X";
    public const string Nominative = "NOM";
    public const string Vocative = "VOC";
    public const string Genitive = "GEN";
    public const string Locative = "LOC";
    public const string Dative = "DAT";
    public const string Ablative = "ABL";
    public const string Accusative = "ACC";


    public static bool IsCase(string input)
    {
        switch (input)
        {
            case Nominative:
                return true;
            case Vocative:
                return true;
            case Genitive:
                return true;
            case Locative:
                return true;
            case Dative:
                return true;
            case Ablative:
                return true;
            case Accusative:
                return true;
            
            default:
                return false;
        }
    }
}