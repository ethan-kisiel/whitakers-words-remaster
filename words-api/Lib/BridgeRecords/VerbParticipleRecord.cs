// Project: words-api
// File: VParRecord.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 23:08:11
// Last Modified: 23 08 2025 23:08:11
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;
using words_api.Lib.Enums;

namespace words_api.Lib.BridgeRecords;

public class VerbParticipleRecord: RecordBase
{
    public string Declension { get; set; }
    public string Case { get; set; }
    public string Number { get; set; }
    public string Gender { get; set; }
    public string Tense { get; set; }
    public string Voice { get; set; }
    public string Mood { get; set; }

    public VerbParticipleRecord(string wordMatch, string declension, string wordCase, string number, string gender, string tense, string voice,
        string mood): base(wordMatch, PartsOfSpeech.VerbParticiple)
    {
        Declension = declension;
        Case = wordCase;
        Number = number;
        Gender = gender;
        Tense = tense;
        Voice = voice;
        Mood = mood;
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}