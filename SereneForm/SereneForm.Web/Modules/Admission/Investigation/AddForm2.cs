using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Forms
{
    [EnumKey("Admission.Investigation.Forms")]
    public enum pbfNormal
    {
        [Description("Normal")]
        Normal = 1,
        [Description("Abnormal")]
        Abnormal = 2
    }
    public enum cast
    {
        [Description("None")]
        None = 1,
        [Description("hyaline")]
        hyaline = 2,
        [Description("cellular")]
        cellular = 3,
        [Description("RBC")]
        RBC = 4,
        [Description("Others")]
        Others = 5
    }
    public enum albumin
    {
        [Description("absent")]
        absent = 1,

        [Description("trace")]
        trace = 2,

        [Description("+")]
        plus = 3,

        [Description("++")]
        plus2 = 4,

        [Description("+++")]
        plus3 = 5,
        [Description("++++")]
        plus4 = 6
    }

    public enum trpresent
    {
        [Description("Present")]
        Present = 1,
        [Description("Absent")]
        Absent = 2
    }
    public enum pus {
        [Description("NILL")]
        NILL = 1,
        [Description("HPF")]
        HPF = 2,
        [Description("Plenty")]
        Plenty = 3
        
    }
    public enum ns1enum { 
        [Description("Positive")]
        Positive=1,
        [Description("Negative")]
        Negative=2,
        [Description("Not Done")]
        NotDone=3
    }
    public enum ictdengue
    {
        [Description("Negative")]
        Negative = 1,
        [Description("Positive IgG")]
        PositiveIgG = 2,
        [Description("Positive IgM")]
        PositiveIgM = 3,
        [Description("Positive Both IgG and IgM")]
        PositiveBothIgGandIgM = 4,
        [Description("Not Done")]
        NotDone = 5
    }
    public enum mpenum
    
    {
        [Description("Positive")]
        Positive=1,
        [Description("Negative")]
        Negative=2
    }
}

