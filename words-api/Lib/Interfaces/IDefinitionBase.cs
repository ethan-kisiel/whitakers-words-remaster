// Project: words-api
// File: DefinitionBase.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 18:08:22
// Last Modified: 23 08 2025 18:08:22
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Interfaces;

public interface IDefinitionBase
{
    public string[] Meanings { get; set; }
    public RootLine[] RootLines { get; set; }
}