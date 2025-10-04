// Project: words-api
// File: PrepositionRecord.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 03 10 2025 18:10:28
// Last Modified: 03 10 2025 18:10:28
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;
using words_api.Lib.BridgeTypes.Shared;

namespace words_api.Lib.Models.LookupParts.Records;

public class PrepositionRecord: RecordBase
{
    public string Declension { get; set; }
    public string Case { get; set; }

    public PrepositionRecord(string wordMatch, string declension, params string[] rest): base(wordMatch, PartsOfSpeech.Preposition)
    {
        Declension = declension;
        foreach (var code in rest)
        {
            if (CaseType.IsCase(code))
            {
                Case = code;
            }
        }
    }

    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}