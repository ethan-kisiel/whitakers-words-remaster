using words_api.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://localhost:5174")
            .AllowAnyHeader()
            .AllowAnyMethod());
});


var app = builder.Build();
var translate = app.MapGroup("/api/translate");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

WordsUtil wordsUtil = new WordsUtil();

translate.MapGet("/latin/{entry}", (string entry) =>
{
    try
    {
        
        var sanitizedEntries = SanitizeUtil.Sanitize(entry).Split(' ').Where(e => !string.IsNullOrEmpty(e));
        if (sanitizedEntries.Count() > 10)
        {
            sanitizedEntries = sanitizedEntries.ToArray()[..10];
        }
        
        var result = sanitizedEntries.
            Select(e => WordsParser.ParseLatinSearch(wordsUtil.QueryLatin($"{e}"), e))
            .Aggregate((a, b) => a.Concat(b).ToArray());
        return result;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Something is fucked: {ex.Message}");
        return [];
    }
});

translate.MapGet("/english/{entry}", (string entry) =>
{
    try
    {
        
        var sanitizedEntries = SanitizeUtil.Sanitize(entry).Split(' ').Where(e => !string.IsNullOrEmpty(e));
        if (sanitizedEntries.Count() > 10)
        {
            sanitizedEntries = sanitizedEntries.ToArray()[..10];
        }
        
        var result = sanitizedEntries.
            Select(e => WordsParser.ParseEnglishSearch(wordsUtil.QueryEnglish($"{e}"), e))
            .Aggregate((a, b) => a.Concat(b).ToArray());
        return result;
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return [];
    }
});

app.Run();