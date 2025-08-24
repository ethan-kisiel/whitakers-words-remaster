// Project: words-api
// File: Adjective.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 10:08:32
// Last Modified: 24 08 2025 10:08:32
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;
using words_api.Lib.Enums;

namespace words_api.Lib.BridgeRecords;

public class AdjectiveRecord : RecordBase
{
    public string Declension { get; set; }
    public string Case { get; set; }
    public string Number { get; set; }
    public string Gender { get; set; }
    public string Comparison { get; set; }

    public AdjectiveRecord(string wordMatch, string declension, string caseNumber, string number, string gender, string comparison): base(wordMatch, PartsOfSpeech.Adjective)
    {
        Declension = declension;
        Case = caseNumber;
        Number = number;
        Gender = gender;
        Comparison = comparison;
    }

    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}