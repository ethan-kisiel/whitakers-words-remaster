// Project: words-api
// File: LookupBase.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 18:08:02
// Last Modified: 23 08 2025 18:08:02
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json.Serialization;
using words_api.Lib.BridgeRecords;
using words_api.Lib.Interfaces;

namespace words_api.Lib;

[JsonDerivedType(typeof(LatinLookup))]
[JsonDerivedType(typeof(EnglishLookup))]
public class LookupBase: IDefinitionBase
{
    public string SearchQuery { get; set; } = string.Empty;
    public string PartOfSpeech { get; set; }
    public string Root { get; set; } = string.Empty;
    public string[] Meanings { get; set; } = [];
    public DictionaryCodes DictionaryCodes { get; set; }
}