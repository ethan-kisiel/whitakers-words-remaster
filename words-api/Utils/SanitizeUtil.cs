// Project: words-api
// File: SanitizeUtil.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 31 08 2025 15:08:51
// Last Modified: 31 08 2025 15:08:51
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Utils;

public class SanitizeUtil
{
    public static string Sanitize(string input)
    {
        var chars = input.ToCharArray()
            .Where(inChar => IsSafeChar(inChar));
        
        return chars.Aggregate(string.Empty, (current, next) => current + next);
    }

    private static bool IsSafeChar(char character)
    {
        return char.IsLetterOrDigit(character) || character == ' ';
    }
}