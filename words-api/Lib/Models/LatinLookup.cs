// Project: words-api
// File: LatinToEnglishEntry.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 22 08 2025 19:08:15
// Last Modified: 22 08 2025 19:08:15
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Lib.Interfaces;

namespace words_api.Lib;

public class LatinLookup: LookupBase
{
    public string Root { get; set; } = "";
    public string[] Meanings { get; set; } = [];
    public DictionaryCodes DictionaryCodes { get; set; }
}