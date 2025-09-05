// Project: words-api
// File: Gender.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 14:08:23
// Last Modified: 23 08 2025 23:08:21
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class GenderType
{
    public const string Default = "X";
    public const string Masculine = "M";
    public const string Feminine = "F";
    public const string Neuter = "N";
    public const string Common = "C";

    public static bool IsGender(string input)
    {
        switch (input)
        {
            case Masculine:
                return true;
            case Feminine:
                return true;
            case Neuter:
                return true;
            case Common:
                return true;
            
            default:
                return false;
        }
    }
}