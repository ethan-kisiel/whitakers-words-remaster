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
using words_api.Lib.BridgeTypes.Verbs;

namespace words_api.Lib.BridgeRecords;

public class VerbRecord: RecordBase
{
    public string Conjugation { get; set; }
    public string? Tense { get; set; }
    public string? Voice { get; set; }
    public string? Mood { get; set; }
    public string? Person { get; set; }
    public string? Number { get; set; }

    public VerbRecord(string wordMatch, string conjugation, params string[] rest): base(wordMatch, PartsOfSpeech.Verb)
    {
        Conjugation = conjugation;

        foreach (var code in rest)
        {
            if (TenseType.IsTense(code))
            {
                Tense = code;
                continue;
            }

            if (VoiceType.IsVoice(code))
            {
                Voice = code;
                continue;
            }

            if (MoodType.IsMood(code))
            {
                Mood = code;
                continue;
            }

            if (NumberType.IsNumber(code))
            {
                Number = code;
                continue;
            }

            Person = code; // person will be 0, 1, 2, etc
        }
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}