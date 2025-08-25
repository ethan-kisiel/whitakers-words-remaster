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
    public static RecordBase GetRecord(string wordMatch, string partOfSpeech, params string[] wordParams)
    {
        switch (partOfSpeech)
        {
            case PartsOfSpeech.Adjective:
                return new AdjectiveRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4], wordParams[5]);
            case PartsOfSpeech.Adverb:
                return new AdverbRecord(wordMatch, wordParams[0]);
            case PartsOfSpeech.Noun:
                return new NounRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4]);
            case PartsOfSpeech.Number:
                return new NumeralRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4], wordParams[5]);
            case PartsOfSpeech.Pronoun:
                return new PronounRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4]);
            case PartsOfSpeech.Supine:
                return new PronounRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4]);
            case PartsOfSpeech.Verb:
                return new VerbRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4], wordParams[5], wordParams[6]);
            case PartsOfSpeech.VerbParticiple:
                return new VerbParticipleRecord(wordMatch, wordParams[0], wordParams[2], wordParams[3], wordParams[4], wordParams[5], wordParams[6], wordParams[7]);
            default:
                return new DefaultRecord(wordMatch, partOfSpeech);
        }
    }
}