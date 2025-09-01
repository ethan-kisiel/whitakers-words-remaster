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
        Console.WriteLine(codeString);
        return new DictionaryCodes(codeString[0], codeString[1], codeString[2], codeString[3], codeString[4]);
    }

    private static RootLine ParseRootLine(string line, bool latinLookup=true)
    {
        string regexToUse = latinLookup
            ? RegexPatterns.LatinCaptureRootLinePattern
            : RegexPatterns.EnglishCaptureRootLinePattern;
        var rootLineMatch = Regex.Match(line, regexToUse);
        // parse out base parse out codes
        var rootLine = new RootLine();


        // TODO: make everything optional except for the codes
        // this will require modifying both the rootline object and the regex.
                    
        if (rootLineMatch.Groups["roots"].Success)
        {
            rootLine.Root = rootLineMatch.Groups["roots"].Value;
            Console.WriteLine(rootLine.Root);
        }

        if (rootLineMatch.Groups["pos"].Success)
        {
            rootLine.PartOfSpeech = rootLineMatch.Groups["pos"].Value;
        }
                    
                    
        if (rootLineMatch.Groups["iter"].Success)
        {
            rootLine.Version = rootLineMatch.Groups["iter"].Value;
            rootLine.Version = rootLine.Version.TrimStart('(').TrimEnd(')');
        }

        if (rootLineMatch.Groups["gender"].Success)
        {
            rootLine.Gender = rootLineMatch.Groups["gender"].Value;
            if (!char.IsLetter(rootLine.Gender[0]))
            {
                rootLine.Gender = null;
            }
        }

        if (rootLineMatch.Groups["kind"].Success)
        {
            rootLine.Kind = rootLineMatch.Groups["kind"].Value;
            if (!char.IsLetter(rootLine.Kind[0]))
            {
                rootLine.Kind = null;
            }
        }

        rootLine.Codes = ParseCodes(rootLineMatch.Groups["dictCodes"].Value);

        return rootLine;
    }

    private static EnglishLookup CreateEnglishLookup(RootLine[] roots, string meaningLine, string searchQuery)
    {
        var lookup = new EnglishLookup();
        
        Console.Write(roots.Length);
        lookup.RootLines = roots;
        lookup.Meanings = meaningLine.Split(';')
            .Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        
        return lookup;
    }

    public static EnglishLookup[] ParseEnglishSearch(string input, string searchQuery)
    {
        List<EnglishLookup> lookupResults = new();
        
        List<RootLine> currentRootLines = new();
        string currentMeaningLine = string.Empty;


        foreach (var line in input.Split('\n'))
        {
            var trimmedLine = line.Trim('\n').Trim(' ').Trim('*');
            Console.WriteLine(trimmedLine);
            
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.DefinitionPattern)) // we have hit a definition
            {
                Console.WriteLine("Definition Match");
                currentMeaningLine = $"{currentMeaningLine}{trimmedLine}";
                continue;
            }
            
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.WordRootLineMatchPattern))
            {
                Console.WriteLine("Word Root Match");
                try
                {
                    if (currentMeaningLine != string.Empty)
                    {
                        lookupResults.Add(CreateEnglishLookup(currentRootLines.ToArray(), currentMeaningLine, searchQuery));
                
                        currentMeaningLine = string.Empty;
                        currentRootLines.Clear();
                    }
                    
                    currentRootLines.Add(ParseRootLine(trimmedLine, false));
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Soemthing went wrong: {e.Message}");
                }
            }
        }
        
        if (currentMeaningLine != string.Empty)
        {
            Console.WriteLine($"WRITING LAST LOOKUP: {currentRootLines.Count}, MEANING: {currentMeaningLine}");
            lookupResults.Add(CreateEnglishLookup(currentRootLines.ToArray(), currentMeaningLine, searchQuery));
            
            currentRootLines.Clear();
        }

        return lookupResults.ToArray();
    }
    

    private static LatinLookup CreateLatinLookup(RecordBase[] records, RootLine[] rootLines, string meaningLine, string searchQuery)
    {
        var lookup = new LatinLookup();

        lookup.RecordMatches = records;
        lookup.RootLines = rootLines;
        lookup.Meanings = meaningLine.Split(';')
            .Where(x => !string.IsNullOrWhiteSpace(x)).ToArray();
        lookup.SearchQuery = searchQuery;

        return lookup;
    }

    public static LatinLookup[] ParseLatinSearch(string input, string searchQuery)
    {
        List<LatinLookup> lookupResults = new();
        
        List<RecordBase> currentRecords = new();
        List<RootLine> currentRootLines = new();
        string currentMeaningLine = string.Empty;

        foreach (var line in input.Split('\n'))
        {
            var trimmedLine = line.Trim(' ').Trim('\n');
            Console.WriteLine(trimmedLine);
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.DefinitionPattern)) // we have hit a definition
            {
                Console.WriteLine("Definition Match");
                currentMeaningLine = $"{currentMeaningLine}{trimmedLine}";
                continue;
            }

            if (Regex.IsMatch(trimmedLine, RegexPatterns.WordRootLineMatchPattern))
            {
                Console.WriteLine("Word Root Match");
                try
                {
                    currentRootLines.Add(ParseRootLine(trimmedLine));
                    continue;
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Soemthing went wrong: {e.Message}");
                }
            }
            
            if (Regex.IsMatch(trimmedLine, RegexPatterns.RecordMatchPattern))
            {
                if (currentMeaningLine != string.Empty)
                {
                    lookupResults.Add(CreateLatinLookup(currentRecords.ToArray(), currentRootLines.ToArray(), currentMeaningLine, searchQuery));
                
                    currentMeaningLine = string.Empty;
                    currentRecords.Clear();
                    currentRootLines.Clear();
                }
                Console.WriteLine("Record Match");
                currentRecords.Add(ParseRecord(line));
            }
        }
        
        if (currentMeaningLine != string.Empty)
        {
            lookupResults.Add(CreateLatinLookup(currentRecords.ToArray(), currentRootLines.ToArray(), currentMeaningLine, searchQuery));
            currentRecords.Clear();
            currentRootLines.Clear();
        }

        return lookupResults.ToArray();
    }
}