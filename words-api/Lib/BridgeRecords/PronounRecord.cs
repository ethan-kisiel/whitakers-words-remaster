// Project: words-api
// File: Pronoun.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 00:08:59
// Last Modified: 24 08 2025 00:08:59
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;
using words_api.Lib.Enums;

namespace words_api.Lib.BridgeRecords;

public class PronounRecord: RecordBase
{
    public string Declension { get; set; }
    public string? Case { get; set; }
    public string? Number { get; set; }
    public string? Gender { get; set; }

    public PronounRecord(string wordMatch, string declension, params string[] rest): base(wordMatch, PartsOfSpeech.Pronoun)
    {
        Declension = declension;

        foreach (string code in rest)
        {
            if (CaseType.IsCase(code))
            {
                Case = code;
                continue;
            }

            if (NumberType.IsNumber(code))
            {
                Number = code;
                continue;
            }

            if (GenderType.IsGender(code))
            {
                Gender = code;
            }
        }
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}