// Project: words-api
// File: RootLine.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 18:08:15
// Last Modified: 24 08 2025 18:08:15
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Models.LookupParts;

public struct RootLine
{
    public string? Root { get; set; }
    public string? PartOfSpeech { get; set; }
    
    // TODO: break this shit out to sub models so we don't have optionals
    public string? Version { get; set; }
    public string? Gender { get; set; }
    public string? Kind { get; set; }
    public DictionaryCodes Codes { get; set; }
}