// Project: words-api
// File: Regex.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 24 08 2025 10:08:22
// Last Modified: 24 08 2025 10:08:22
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib;

public class RegexPatterns
{
    public const string UnknownResultMatchPattern = "========   UNKNOWN$"; // check if it's an unknown result
    public const string WordRootLineMatchPattern = @"\[[A-Z]{5}]$";
    public const string RecordMatchPattern = @"^\S+\s+[A-Z]{1,10}";
    public const string DefinitionPattern = @"([^;]+;)";

    public const string CaptureDictionaryCodesPattern = @"\[([A-Z]{5})]$";

    public const string CaptureRootLinePattern =
        @"^(?<roots>\S+(?:[,\s*]\S+)*)\s+(?<pos>[A-Z]+)(?:\s+(?<iter>\([^)]*\)))?(?:\s+(?<gender>[MFNC]))?\s+\[(?<dictCodes>[A-Z]{5})\]$";

    public const string CaptureResultGroupsPattern = @"(\S+)"; // capture all the characters from the record
}