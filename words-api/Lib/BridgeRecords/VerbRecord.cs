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
    public string? Tense { get; set; }
    public string? Voice { get; set; }
    public string? Mood { get; set; }
    public string Person { get; set; }
    public string Number { get; set; }

    public VerbRecord(string wordMatch, string declension, params string[] rest): base(wordMatch, PartsOfSpeech.Verb)
    {
        Declension = declension;

        for (int i = 0; i < rest.Length - 2; i++)
        {
            if (TenseType.IsTense(rest[i]))
            {
                Tense = rest[i];
            }

            if (VoiceType.IsVoice(rest[i]))
            {
                Voice = rest[i];
            }

            if (MoodType.IsMood(rest[i]))
            {
                Mood = rest[i];
            }
        }
        
        Person = rest[^2];
        Number = rest[^1];
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}