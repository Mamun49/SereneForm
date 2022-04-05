using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Forms
{
    [FormScript("Default.RealOthers")]
    [BasedOnRow(typeof(RealOthersRow), CheckNames = true)]
    public class RealOthersForm
    {
        public string InvestOthers { get; set; }
    }
}