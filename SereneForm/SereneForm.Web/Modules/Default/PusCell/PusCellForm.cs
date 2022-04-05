using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Forms
{
    [FormScript("Default.PusCell")]
    [BasedOnRow(typeof(PusCellRow), CheckNames = true)]
    public class PusCellForm
    {
        public string HpmData { get; set; }
    }
}