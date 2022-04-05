using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Forms
{
    [FormScript("Default.Country")]
    [BasedOnRow(typeof(CountryRow), CheckNames = true)]
    public class CountryForm
    {
        public string CountryName { get; set; }
    }
}