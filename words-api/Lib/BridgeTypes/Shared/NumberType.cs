// Project: words-api
// File: Number.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 14:08:51
// Last Modified: 23 08 2025 23:08:21
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Numerics;

namespace words_api.Lib.Enums;

public class NumberType
{
    public const string Default = "X";
    public const string Singular = "S";
    public const string Plural = "P";

    public static bool IsNumber(string input)
    {
        switch (input)
        {
            case Singular:
                return true;
            case Plural:
                return true;
            
            default:
                return false;
        }
    }
}