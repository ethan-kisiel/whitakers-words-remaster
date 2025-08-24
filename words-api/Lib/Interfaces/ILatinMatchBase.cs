// Project: words-api
// File: IWordMatchBase.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 19:08:05
// Last Modified: 23 08 2025 19:08:05
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Interfaces;

public interface ILatinMatchBase
{
    public string Word { get; set; }
    public string PartOfSpeech { get; set; }
}