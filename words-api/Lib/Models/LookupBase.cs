// Project: words-api
// File: LookupBase.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 18:08:02
// Last Modified: 23 08 2025 18:08:02
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using words_api.Lib.Interfaces;

namespace words_api.Lib;

public class LookupBase: IDefinitionBase
{
    public string SearchQuery { get; set; } = string.Empty;
    
    public string Root { get; set; } = string.Empty;
    public string[] Meanings { get; set; } = [];
    
    public DictionaryCodes DictionaryCodes { get; set; }
}