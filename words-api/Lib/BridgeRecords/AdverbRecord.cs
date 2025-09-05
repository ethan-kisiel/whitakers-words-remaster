// Project: words-api
// File: Adverb.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 00:08:20
// Last Modified: 24 08 2025 00:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;
using words_api.Lib.Enums;

namespace words_api.Lib.BridgeRecords;

public class AdverbRecord: RecordBase
{
    public string? Comparison { get; set; }

    public AdverbRecord(string wordMatch, params string[] rest): base(wordMatch, PartsOfSpeech.Adverb)
    {
        foreach (var code in rest)
        {
            if (ComparisonType.IsComparison(code))
            {
                Comparison = code;
            }
        }
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}