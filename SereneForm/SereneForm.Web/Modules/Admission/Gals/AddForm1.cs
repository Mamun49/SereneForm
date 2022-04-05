using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission
{


    [EnumKey("Admission.Gals")]
    public enum Present
    {
        [Description("Present")]
        Present = 1,
        [Description("Absent")]
        Absent = 2
    }

    public enum Positive
    {
        [Description("Positive")]
        Positive = 1,
        [Description("Negative")]
        Negative = 2
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
}