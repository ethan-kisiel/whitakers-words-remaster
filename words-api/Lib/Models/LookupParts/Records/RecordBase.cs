// Project: words-api
// File: RecordBase.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 13:08:38
// Last Modified: 24 08 2025 13:08:38
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json.Serialization;
using words_api.Lib.Interfaces;

namespace words_api.Lib.Models.LookupParts.Records;

[JsonDerivedType(typeof(AdjectiveRecord))]
[JsonDerivedType(typeof(AdverbRecord))]
[JsonDerivedType(typeof(DefaultRecord))]
[JsonDerivedType(typeof(NounRecord))]
[JsonDerivedType(typeof(NumeralRecord))]
[JsonDerivedType(typeof(PronounRecord))]
[JsonDerivedType(typeof(SupineRecord))]
[JsonDerivedType(typeof(VerbRecord))]
[JsonDerivedType(typeof(VerbParticipleRecord))]
[JsonDerivedType(typeof(PrepositionRecord))]
public abstract class RecordBase: IBridgeRecordBase
{
    public string WordMatch { get; set; }
    public string PartOfSpeech { get; set; }

    public abstract string ToJson();

    protected RecordBase(string wordMatch, string partOfSpeech)
    {
        WordMatch = wordMatch;
        PartOfSpeech = partOfSpeech;
    }
}