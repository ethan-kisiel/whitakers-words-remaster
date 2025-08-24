// Project: words-api
// File: IBridgeRecordBase.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 10:08:42
// Last Modified: 24 08 2025 10:08:42
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;

namespace words_api.Lib.BridgeRecords;

public interface IBridgeRecordBase
{
    public string WordMatch { get; set; }
    public string PartOfSpeech { get; set; }

    public string ToJson();
}