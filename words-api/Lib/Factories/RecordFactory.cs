// Project: words-api
// File: RecordFactory.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 10:08:08
// Last Modified: 24 08 2025 10:08:08
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Lib.BridgeRecords;
using words_api.Lib.Enums;

namespace words_api.Lib.Factories;

public class RecordFactory
{
    public static RecordBase GetRecord(string wordMatch, string partOfSpeech, string declOrConj, params string[] wordParams)
    {
        switch (partOfSpeech)
        {
            case PartsOfSpeech.Adjective:
                return new AdjectiveRecord(wordMatch, declOrConj, wordParams);
            case PartsOfSpeech.Adverb:
                return new AdverbRecord(wordMatch, wordParams);
            case PartsOfSpeech.Noun:
                return new NounRecord(wordMatch, declOrConj, wordParams);
            case PartsOfSpeech.Number:
                return new NumeralRecord(wordMatch, declOrConj, wordParams);
            case PartsOfSpeech.Pronoun:
                return new PronounRecord(wordMatch, declOrConj, wordParams);
            case PartsOfSpeech.Supine:
                return new PronounRecord(wordMatch, declOrConj, wordParams);
            case PartsOfSpeech.Verb:
                return new VerbRecord(wordMatch, declOrConj, wordParams);
            case PartsOfSpeech.VerbParticiple:
                return new VerbParticipleRecord(wordMatch, declOrConj, wordParams);
            default:
                return new DefaultRecord(wordMatch, partOfSpeech);
        }
    }
}