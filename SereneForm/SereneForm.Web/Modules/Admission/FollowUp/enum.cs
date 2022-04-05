using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission
{


    [EnumKey("Admission.FollowUp")]
    public enum conditionenum
    {
        [Description("Improved")]
        Improved = 1,
        [Description("Deteriorated")]
        Deteriorated = 2,
        [Description("Static")]
        Static = 3

    }

    public enum dischargeenum
    {
        [Description("D with A")]
        DwithA = 1,
        [Description("DOR")]
        DOR = 2,
        [Description("DORB")]
        DORB=3,
        [Description("Refer to other ward")]
        Refertootherward=4,
        [Description("Other")]
        Other=5    

    }

    
}