// Project: words-api
// File: Comparison.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 22:08:01
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class ComparisonType
{
    public const string Default = "X";
    public const string Positive = "POS";
    public const string Comparative = "COMP";
    public const string Superlative = "SUP";

    public static bool IsComparison(string input)
    {
        switch (input)
        {
            case Positive:
                return true;
            case Comparative:
                return true;
            case Superlative:
                return true;
            
            default:
                return false;
        }
    }
}