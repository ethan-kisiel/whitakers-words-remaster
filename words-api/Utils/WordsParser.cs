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

        return RecordFactory.GetRecord(words[0], words[1], words[2..]);
    }

    private static DictionaryCodes ParseCodes(string codeString)
    {
        return new DictionaryCodes(codeString[0], codeString[1], codeString[2], codeString[3], codeString[4]);
    }

    // private static string ParseRoot(string rootline)
    // {
    //     
    // }

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
        List<RootLine> currentRootLines = new();

        foreach (var line in input.Split('\n'))
        {
            var trimmedLine = line.Trim(' ').Trim('\n');
            Console.WriteLine(trimmedLine);
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.DefinitionPattern)) // we have hit a definition
            {
                Console.WriteLine("Definition Match");
                currentLookup.Meanings = trimmedLine.Split(';')
                    .Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();

                currentLookup.RecordMatches = currentRecords.ToArray();
                currentLookup.RootLines = currentRootLines.ToArray();
                
                lookupResults.Add(currentLookup);
                
                currentRecords.Clear();
                currentRootLines.Clear();
                
                currentLookup = new LatinLookup();
            }

            if (Regex.IsMatch(trimmedLine, RegexPatterns.WordRootLineMatchPattern))
            {
                Console.WriteLine("Word Root Match");
                try
                {
                    var rootLineMatch = Regex.Match(trimmedLine, RegexPatterns.CaptureRootLinePattern);
                    // parse out base parse out codes
                    var rootLine = new RootLine();


                    // TODO: make everything optional except for the codes
                    // this will require modifying both the rootline object and the regex.
                    rootLine.Root = rootLineMatch.Groups["roots"].Value;
                    rootLine.PartOfSpeech = rootLineMatch.Groups["pos"].Value;

                    if (rootLineMatch.Groups["iter"].Success)
                    {
                        rootLine.Version = rootLineMatch.Groups["iter"].Value;
                    }

                    if (rootLineMatch.Groups["gender"].Success)
                    {
                        rootLine.Gender = rootLineMatch.Groups["gender"].Value;

                    }

                    rootLine.Codes = ParseCodes(rootLineMatch.Groups["dictCodes"].Value);
                    currentRootLines.Add(rootLine);
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Soemthing went wrong: {e.Message}");
                }
            }
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.RecordMatchPattern))
            {
                Console.WriteLine("Record Match");
                currentRecords.Add(ParseRecord(line));
            }
        }

        return lookupResults.ToArray();
    }
}