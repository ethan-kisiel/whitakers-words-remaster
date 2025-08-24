// Project: words-api
// File: WordsParser.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 10:08:55
// Last Modified: 24 08 2025 10:08:55
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.RegularExpressions;
using words_api.Lib;
using words_api.Lib.BridgeRecords;
using words_api.Lib.Factories;

namespace words_api.Utils;

public class WordsParser
{
    
    private static RecordBase ParseRecord(string record)
    {
        var words = Regex.Matches(record, RegexPatterns.CaptureResultGroupsPattern, RegexOptions.Multiline)
            .Select<Match, string>(match => match.Groups[0].Value).ToArray();
        
        Console.WriteLine($"PARSED WORDS: {words.Length}");
        foreach (var word in words)
        {
            Console.WriteLine(word);
        }

        return RecordFactory.GetRecord(words[0], words[1], words[2..]);
    }

    private static DictionaryCodes ParseCodes(string rootLine)
    {
        var codes = Regex.Match(rootLine, RegexPatterns.CaptureDictionaryCodesPattern).Groups[0].Value;
        
        return new DictionaryCodes(codes[0], codes[1], codes[2], codes[3], codes[4]);
    }

    // public static EnglishLookup ParseEnglishLookup
    // {
    //     return EnglishLookup
    // }

    // stages:
    // record readouts
    // base readout
    // definitions readout

    public static LatinLookup[] ParseLatinSearch(string input)
    {
        List<LatinLookup> lookupResults = new();
        
        LatinLookup currentLookup = new LatinLookup();
        
        List<RecordBase> currentRecords = new();

        foreach (var line in input.Split('\n'))
        {
            var trimmedLine = line.Trim(' ');

            if (Regex.IsMatch(trimmedLine, RegexPatterns.DefinitionPattern)) // we have hit a definition
            {
                currentLookup.Meanings = trimmedLine.Split(";")
                    .Where(m => m.Trim(' ') != string.Empty).ToArray();

                currentLookup.RecordMatches = currentRecords.ToArray();
                lookupResults.Add(currentLookup);
                
                currentRecords.Clear();
                currentLookup = new LatinLookup();
            }

            if (Regex.IsMatch(trimmedLine, RegexPatterns.WordBaseMatchPattern))
            {
                // parse out base parse out codes
                currentLookup.DictionaryCodes = ParseCodes(trimmedLine);
            }
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.RecordMatchPattern))
            {
                Console.WriteLine($"Parsing record: {ParseRecord(line)}");
                currentRecords.Add(ParseRecord(line));
            }
        }

        return lookupResults.ToArray();
    }
}