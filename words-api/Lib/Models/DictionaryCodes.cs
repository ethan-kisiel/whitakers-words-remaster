// Project: words-api
// File: DictionaryCodes.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 18:08:44
// Last Modified: 23 08 2025 18:08:44
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib;

public struct DictionaryCodes
{
    public char Age { get; set; }
    public char Area { get; set; }
    public char Geo { get; set; }
    public char Frequency { get; set; }
    public char Source { get; set; }


    public DictionaryCodes(char age, char area, char geo, char frequency, char source)
    {
        Age = age;
        Area = area;
        Geo = geo;
        Frequency = frequency;
        Source = source;
    }
}