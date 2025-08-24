// Project: words-api
// File: PropackRecord.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 00:08:03
// Last Modified: 24 08 2025 00:08:03
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Text.Json;

namespace words_api.Lib.BridgeRecords;

public class DefaultRecord: RecordBase
{
    public DefaultRecord(string wordMatch, string partOfSpeech): base(wordMatch, partOfSpeech)
    {
    }
    
    public override string ToJson()
    {
        return JsonSerializer.Serialize(this);
    }
}