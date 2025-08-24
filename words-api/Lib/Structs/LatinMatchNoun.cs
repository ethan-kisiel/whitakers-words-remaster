// Project: words-api
// File: LatinMatchNoun.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 19:08:11
// Last Modified: 23 08 2025 19:08:11
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib;

public class LatinMatchNoun: LatinMatchBase
{
    public UInt16 Declension { get; set; }
    public string Case { get; set; } = string.Empty;
    public string Gender { get; set; } = string.Empty;
    public string Plurality { get; set; } = string.Empty;
}