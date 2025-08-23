// Project: words-api
// File: WWUtil.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 20 08 2025 20:08:25
// Last Modified: 20 08 2025 20:08:25
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

using System.Diagnostics;

namespace words_api.Utils;

public class WWUtil
{
    private readonly string _wordsPath;

    public WWUtil(string wordsPath = "bin/words") // path inside Docker
    {
        _wordsPath = wordsPath;
    }

    public string Run(string arguments)
    {
        var psi = new ProcessStartInfo
        {
            FileName = _wordsPath,
            Arguments = arguments,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        using var process = new Process { StartInfo = psi };
        process.Start();

        string output = process.StandardOutput.ReadToEnd();
        string error = process.StandardError.ReadToEnd();

        process.WaitForExit();
        
        if (process.ExitCode != 0)
        {
            throw new Exception($"Ada process failed: {error}");
        }
        
        return output;
    }
}