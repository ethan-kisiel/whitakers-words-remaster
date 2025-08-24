// Project: words-api
// File: Age.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 23:08:28
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class Age
{
    public const string Default = "X";
    public const string Archaic = "A";
    public const string Early = "B";
    public const string Classical = "C";
    public const string Late = "D";
    public const string Later = "E";
    public const string Medieval = "F";
    public const string Scholar = "G";
    public const string Modern = "H";

    // X,   --              --  In use throughout the ages/unknown -- the default
    // A,   --  archaic     --  Very early forms, obsolete by classical times
    // B,   --  early       --  Early Latin, pre-classical, used for effect/poetry
    // C,   --  classical   --  Limited to classical (~150 BC - 200 AD)
    // D,   --  late        --  Late, post-classical (3rd-5th centuries)
    // E,   --  later       --  Latin not in use in Classical times (6-10) Christian
    // F,   --  medieval    --  Medieval (11th-15th centuries)
    // G,   --  scholar     --  Latin post 15th - Scholarly/Scientific   (16-18)
    // H    --  modern      --  Coined recently, words for new things (19-20)
}