using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Forms
{
   
   
    [EnumKey("Admission.Forms")]
    public enum Present
    {
        [Description("Present")]
        Present = 1,
        [Description("Absent")]
        Absent = 2
    }

    public enum LymphNodes
    {
        [Description("Palpable")]
        Palpable = 1,
        [Description("NP")]
        NP = 2
    }

    public enum Normal
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Abnormal")]
        Abnormal = 2
    }
    public enum Flexed
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Flexed")]
        Flexed = 2
    }
    public enum Positive
    {
        [Description("Positive")]
        Positive = 1,
        [Description("Negative")]
        Negative = 2
    }
    //public enum pbfNormal
    //{
    //    [Description("Normal")]
    //    Normal = 1,
    //    [Description("Abnormal")]
    //    Abnormal = 2
    //}
    //public enum cast
    //{
    //    [Description("None")]
    //    None = 1,
    //    [Description("hyaline")]
    //    hyaline = 2,
    //    [Description("cellular")]
    //    cellular = 3,
    //    [Description("RBC")]
    //    RBC = 4,
    //    [Description("Others")]
    //    Others=5
    //}
    //public enum albumin
    //{
    //    [Description("absent")]
    //    absent = 1,

    //    [Description("trace")]
    //    trace = 2,

    //    [Description("plus")]
    //    plus=3,

    //    [Description("plusplus")]
    //    plusplus = 4,

    //    [Description("plusplusplus")]
    //    plusplusplus = 5,
    //    [Description("plusplusplusplus")]
    //    plusplusplusplus = 6
    //}

    //public enum trpresent
    //{
    //    [Description("Present")]
    //    Present = 1,
    //    [Description("Absent")]
    //    Absent = 2
    //}
}