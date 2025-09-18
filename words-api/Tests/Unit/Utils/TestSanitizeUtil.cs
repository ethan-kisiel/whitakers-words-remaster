// Project: words-api
// File: TestSanitizeUtil.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 05 09 2025 22:09:46
// Last Modified: 05 09 2025 22:09:47
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Diagnostics;
using words_api.Utils;

namespace words_api.Tests.Unit.Utils;

public class TestSanitizeUtil
{
    public static void RunAll()
    {
        TestSanitize_RemovesUnsafe_Characters();
    }
    
    private static void TestSanitize_RemovesUnsafe_Characters()
    {
        string result = SanitizeUtil.Sanitize("\\;()\'\"@!{}&");
        Debug.Assert(result == String.Empty,
            $"Sanitize failed Expected '', but got{result}");
    }

    private static void TestSanitize_DoesNotRemoveSafe_Characters()
    {
        string result = SanitizeUtil.Sanitize("abcde efgh ijkl");
        Debug.Assert(result == String.Empty,
            $"Sanitize failed Expected 'abcde efgh ijkl', but got{result}");
    }
}