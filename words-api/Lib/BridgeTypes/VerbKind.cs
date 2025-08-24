// Project: words-api
// File: VerbKind.cs
// 
// Author: Ethan Kisiel (ethan.a.kisiel@gmail.com)
// 
// File Created: 23 08 2025 22:08:37
// Last Modified: 23 08 2025 23:08:20
// 
// Modified By: Ethan Kisiel (ethan.a.kisiel@gmail.com>)
// 
// Copyright 2025 - 2025 Ethan Kisiel, Ethan Kisiel

namespace words_api.Lib.Enums;

public class VerbKind
{
    public const string Default = "X";
    public const string ToBe = "TO BE";
    public const string ToBeing = "TO BEING";
    public const string Genitive = "GEN";
    public const string Dative = "DAT";
    public const string Ablative = "ABL";
    public const string Transitive = "TRANS";
    public const string Intransitive = "INTRANS";
    public const string Impersonal = "IMPERS";
    public const string Deponent = "DEP";
    public const string Semideponent = "SEMIDEP";
    public const string PerfectDefinite = "PERFDEF";

    // X,        --  all, none, or unknown
    // To_Be,     --  only the verb TO BE (esse)
    // To_Being,  --  compounds of the verb to be (esse)
    // Gen,       --  verb taking the GENitive
    // Dat,       --  verb taking the DATive
    // Abl,       --  verb taking the ABLative
    // Trans,     --  TRANSitive verb
    // Intrans,   --  INTRANSitive verb
    // Impers,    --  IMPERSonal verb (implied subject 'it', 'they', 'God')
    // --  agent implied in action, subject in predicate
    // Dep,       --  DEPonent verb
    // --  only passive form but with active meaning
    // Semidep,   --  SEMIDEPonent verb (forms perfect as deponent)
    // --  (perfect passive has active force)
    // Perfdef    --  PERFect DEFinite verb
    // --  having only perfect stem, but with present force
}