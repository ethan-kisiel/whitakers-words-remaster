// Project: words-api
// File: LatinMatch.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 18:08:12
// Last Modified: 23 08 2025 18:08:12
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Lib.Interfaces;

namespace words_api.Lib;

public class LatinMatchBase: ILatinMatchBase
{
    public string Word { get; set; } = string.Empty;
    public string PartOfSpeech { get; set; } = string.Empty;
}