// Project: words-api
// File: Tense.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 17:08:04
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class TenseType
{
    public const string Default = "X";
    public const string Present = "PRES";
    public const string Imperfect = "IMPF";
    public const string Future = "FUT";
    public const string Perfect = "PERF";
    public const string Pluperfect = "PLUP";
    public const string FuturePerfect = "FUTP";

    public static bool IsTense(string input)
    {
        switch (input)
        {
            case Present:
                return true;
            case Imperfect:
                return true;
            case Future:
                return true;
            case Perfect:
                return true;
            case Pluperfect:
                return true;
            case FuturePerfect:
                return true;
            
            default:
                return false;
        }
    }
}