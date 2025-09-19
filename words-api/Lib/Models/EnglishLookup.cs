// Project: words-api
// File: EnglishToLatinEntry.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 22 08 2025 19:08:28
// Last Modified: 22 08 2025 19:08:28
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Lib.Models.LookupParts;

namespace words_api.Lib.Models;

public class EnglishLookup : LookupBase
{
    public RootLine[] RootLines { get; set; }
    public string[] Meanings { get; set; } = [];
}