FROM mcr.microsoft.com/dotnet/sdk:8.0

# Install Ada toolchain
RUN apt-get update && apt-get install -y \
    gnat-12 gprbuild make curl \
 && rm -rf /var/lib/apt/lists/*

# Build Ada project
WORKDIR /words
COPY ./words /words
RUN make commands && make data

# Build .NET project
WORKDIR /dotnet
COPY ./words-api /dotnet
RUN dotnet publish -c Release -o /app/out

# Set working directory for runtime

WORKDIR /words
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000

# Run the .NET API
CMD ["dotnet", "../app/out/words-api.dll"]