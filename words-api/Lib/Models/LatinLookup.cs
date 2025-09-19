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

using words_api.Lib.Models.LookupParts;
using words_api.Lib.Models.LookupParts.Records;

namespace words_api.Lib.Models;

public class LatinLookup: LookupBase
{
    public RootLine[] RootLines { get; set; }
    public RecordBase[] RecordMatches { get; set; } = [];
    public string[] Meanings { get; set; } = [];
}