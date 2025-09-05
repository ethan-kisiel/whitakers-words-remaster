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
using words_api.Lib.BridgeTypes.Verbs;
using words_api.Lib.Enums;

namespace words_api.Lib.BridgeRecords;

public class VerbParticipleRecord: RecordBase
{
    public string Conjugation { get; set; }
    public string? Case { get; set; }
    public string? Number { get; set; }
    public string? Gender { get; set; }
    public string? Tense { get; set; }
    public string? Voice { get; set; }
    public string? Mood { get; set; }

    public VerbParticipleRecord(string wordMatch, string conjugation, params string[] rest): base(wordMatch, PartsOfSpeech.VerbParticiple)
    {
        Conjugation = conjugation;

        foreach (var code in rest)
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
                continue;
            }

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
            }
        }
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}