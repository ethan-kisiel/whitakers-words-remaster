// Project: words-api
// File: LoggingUtil.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 04 10 2025 08:10:50
// Last Modified: 04 10 2025 08:10:51
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api_tests.Utils;

public class LoggingUtil
{
    private readonly string _logFilePath;
    private readonly object _lockObject = new();


    public string LogFilePath
    {
        get
        {
            return _logFilePath;
        }
    }


    public LoggingUtil(string logsDirectory, string logFileName)
    {
        Directory.CreateDirectory(logsDirectory);
        _logFilePath = Path.Combine(logsDirectory, $"{logFileName}.txt"); 
    }
    
    
    private void WriteLog(string logLine)
    {
        lock (_lockObject) // ensure thread safety
        {
            File.AppendAllText(_logFilePath, logLine + Environment.NewLine);
        }
    }

    public void Info(string message)
    { 
        var logLine = $"{DateTime.UtcNow:O} | [INFO] {message}";
        WriteLog(logLine);
    }
    
    public void Warn(string message)
    {
        var logLine = $"{DateTime.UtcNow:O} | [WARN] {message}";
        WriteLog(logLine);
    }
    public void Error(string message)
    {
        var logLine = $"{DateTime.UtcNow:O} | [ERROR] {message}";
        WriteLog(logLine);
    }
}