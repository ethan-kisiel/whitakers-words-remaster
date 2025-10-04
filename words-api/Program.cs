using System.Runtime.InteropServices.JavaScript;
using words_api_tests.Utils;
using words_api.Service;
using words_api.Util;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod());
});


var app = builder.Build();
var translate = app.MapGroup("/api/translate");
var logs = app.MapGroup("/api/logs");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

WordsUtil wordsUtil = new WordsUtil();

var logger = new LoggingUtil("logs", "api");


translate.MapGet("/latin/{entry}", (string entry) =>
{
    try
    {
        logger.Info($"Search Query Latin -> English: {entry}");
        var sanitizedEntries = SanitizeUtil.Sanitize(entry).Split(' ').Where(e => !string.IsNullOrEmpty(e)).ToArray();
        if (sanitizedEntries.Length > 10)
        {
            sanitizedEntries = sanitizedEntries[..10];
            logger.Warn($"Search Query Latin -> English: {entry}, Truncated to: {sanitizedEntries}");
        }
        
        var result = sanitizedEntries.
            Select(e => WordsParser.ParseLatinSearch(wordsUtil.QueryLatin($"{e}"), e))
            .Aggregate((a, b) => a.Concat(b).ToArray());
        return Results.Ok(result);
    }
    catch (Exception ex)
    {
        logger.Error($"Search Query Latin -> English: {entry}, {ex.Message}");
        return Results.StatusCode(500);
    }
});

translate.MapGet("/english/{entry}", (string entry) =>
{
    try
    {
        logger.Info($"Search Query English -> Latin: {entry}");
        var sanitizedEntries = SanitizeUtil.Sanitize(entry).Split(' ').Where(e => !string.IsNullOrEmpty(e)).ToArray();
        if (sanitizedEntries.Length > 10)
        {
            sanitizedEntries = sanitizedEntries[..10];
            logger.Warn($"Search Query English -> Latin: {entry}, Truncated to: {sanitizedEntries}");
        }
        
        var result = sanitizedEntries.
            Select(e => WordsParser.ParseEnglishSearch(wordsUtil.QueryEnglish($"{e}"), e))
            .Aggregate((a, b) => a.Concat(b).ToArray());
        
        
        
        return Results.Ok(result);
    }
    catch (Exception ex)
    {
        logger.Error($"Search Query English -> Latin: {entry}, {ex.Message}");
        return Results.StatusCode(500);
    }
});


logs.MapGet("/", async () =>
{
    try
    {
        if (!File.Exists(logger.LogFilePath))
        {
            return Results.NotFound("File not found.");
        }
        
        var fileBytes = await File.ReadAllBytesAsync(logger.LogFilePath);
        return Results.File(fileBytes, "text/plain", logger.LogFilePath);
    }
    catch (Exception ex)
    {
        logger.Error($"Log file: {logger.LogFilePath} not found. {ex.Message}");
        return Results.StatusCode(500);
    }
});

app.Run();