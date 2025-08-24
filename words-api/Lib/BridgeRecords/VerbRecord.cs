// Project: words-api
// File: VerbRecord.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 23:08:38
// Last Modified: 23 08 2025 23:08:38
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;
using words_api.Lib.Enums;

namespace words_api.Lib.BridgeRecords;

public class VerbRecord: RecordBase
{
    public string Declension { get; set; }
    public string Tense { get; set; }
    public string Voice { get; set; }
    public string Mood { get; set; }
    public string Person { get; set; }
    public string Number { get; set; }

    public VerbRecord(string wordMatch, string declension, string tense, string voice, string mood, string person, string number): base(wordMatch, PartsOfSpeech.Verb)
    {
        Declension = declension;
        Tense = tense;
        Voice = voice;
        Mood = mood;
        Person = person;
        Number = number;
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}