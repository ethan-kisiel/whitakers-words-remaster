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
        var result = wordsUtil.Run($"{entry}");
        return WordsParser.ParseLatinSearch(result);
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
        return wordsUtil.Run($"~e {entry}");
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return "";
    }
});

app.Run();