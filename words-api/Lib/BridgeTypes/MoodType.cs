// Project: words-api
// File: Mood.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 22:08:18
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class MoodType
{
    public const string Default = "X";
    public const string Indicative = "IND";
    public const string Subjunctive = "SUB";
    public const string Imperative = "IMP";
    public const string Infinative = "INF";
    public const string Participle = "PPL";


    public static bool IsMood(string input)
    {
        return (input == Indicative || input == Subjunctive || input == Imperative || input == Infinative || input == Participle);
    }
}