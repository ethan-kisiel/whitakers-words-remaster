using words_api.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

WWUtil wwUtil = new WWUtil();

app.MapGet("/ww/{word}", (string word) =>
{
    try
    {
        return wwUtil.Run($"{word}");
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
        return "";
    }
});

app.Run();