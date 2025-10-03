// Project: words-api
// File: TestWordsParser.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 18 09 2025 18:09:53
// Last Modified: 18 09 2025 18:09:53
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Service;
using words_api.Util;

namespace words_api_tests.Service;

[TestClass]
public class TestWordsParser
{
    [TestMethod]
    public void ParseLatinSearch_ShouldParseNounRecord_DefaultBranch()
    {
        // Arrange: a noun entry should hit the default decl/conj branch
        string input = @"
funer.e              N      3 2 ABL S N                 
funus, funeris  N (3rd) N   [XXXAX]  
burial, funeral; funeral rites; ruin; corpse; death;
";
        string searchQuery = "funere";

        // Act
        var results = WordsParser.ParseLatinSearch(input, searchQuery);

        // Assert
        Assert.IsTrue(results.Length > 0);
        var lookup = results.First();
        Assert.AreEqual(searchQuery, lookup.SearchQuery);
        Assert.IsTrue(lookup.Meanings.Any(m => m.Contains("funeral")));
        Assert.IsTrue(lookup.RootLines.Length > 0, "Expected root line parsed.");
        Assert.IsTrue(lookup.RecordMatches.Length > 0, "Expected record parsed.");
    }

    [TestMethod]
    public void ParseLatinSearch_ShouldParseAdverbRecord()
    {
        // Arrange: an adverb entry triggers the adverb branch
        string input = @"
non                  ADV    POS                         
non  ADV   [XXXAX]  
not, by no means, no; [non modo ... sed etiam => not only ... but also];
";
        string searchQuery = "non";

        // Act
        var results = WordsParser.ParseLatinSearch(input, searchQuery);

        // Assert
        Assert.IsTrue(results.Length > 0);
        Assert.IsTrue(results[0].RecordMatches.Any());
        Assert.IsTrue(results[0].Meanings.Any(m => m.Contains("by no means")));
    }
    
    
    [TestMethod]
    public void ParseLatinSearch_ShouldParsePrepositionRecord()
    {
        // Arrange: an adverb entry triggers the adverb branch
        string input = @"
per                  PREP   ACC                         
per  PREP  ACC   [XXXAX]  
through (space); during (time); by, by means of;
";
        string searchQuery = "per";

        // Act
        var results = WordsParser.ParseLatinSearch(input, searchQuery);

        // Assert
        Assert.IsTrue(results.Length > 0);
        Assert.IsTrue(results[0].RecordMatches.Any());
        Assert.IsTrue(results[0].Meanings.Any(m => m.Contains("through(space)")));
    }

    [TestMethod]
    public void ParseLatinSearch_ShouldParseConjunctionRecord()
    {
        string input = @"
si                   CONJ                               
si  CONJ   [XXXAX]  
if, if only; whether; [quod si/si quis or quid => but if/if anyone or anything]
";
        string searchQuery = "si";

        // Act
        var results = WordsParser.ParseLatinSearch(input, searchQuery);

        // Assert
        Assert.IsTrue(results.Length > 0);
        Assert.IsTrue(results[0].RecordMatches.Any());
        Assert.IsTrue(results[0].Meanings.Any(m => m.Contains("whether")));
    }

    [TestMethod]
    public void ParseLatinSearch_ShouldCommitLastLookup()
    {
        // Arrange: meaning line with no trailing record forces last lookup commit
        string input = @"
aquilon.ibus         N      3 1 ABL P M                 
aquilo, aquilonis  N (3rd) M   [XXXCO]  
north wind; NNE/NE wind (for Rome); north; Boreas (personified);
";
        string searchQuery = "aquilonibus";

        // Act
        var results = WordsParser.ParseLatinSearch(input, searchQuery);

        // Assert
        Assert.AreEqual(1, results.Length, "Expected last lookup to be committed.");
        Assert.IsTrue(results[0].Meanings.Any(m => m.Contains("Boreas")));
    }

    [TestMethod]
    public void ParseLatinSearch_ShouldHandleMultipleRecords()
    {
        // Arrange: two separate entries
        string input = @"
antiqu.a             ADJ    1 1 NOM S F POS             
antiqu.a             ADJ    1 1 VOC S F POS             
antiqu.a             ADJ    1 1 ABL S F POS             
antiqu.a             ADJ    1 1 NOM P N POS             
antiqu.a             ADJ    1 1 VOC P N POS             
antiqu.a             ADJ    1 1 ACC P N POS             
antiquus, antiqua -um, antiquior -or -us, antiquissimus -a -um  ADJ   [XXXAO]  
old/ancient/aged; time-honored; simple/classic; venerable; archaic/outdated;

qu.id                PRON   1 0 NOM S N                 
qu.id                PRON   1 0 ACC S N                 
 [XXXAO]  
who/what/which?, what/which one/man/person/thing? what kind/type of?;
anyone/anybody/anything; whoever you pick; something (or other); any (NOM S);
";
        string searchQuery = "multi";

        // Act
        var results = WordsParser.ParseLatinSearch(input, searchQuery);

        // Assert
        Assert.AreEqual(2, results.Length, "Expected two LatinLookup results.");
    }
}
