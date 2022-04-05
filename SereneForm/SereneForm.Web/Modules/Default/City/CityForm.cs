using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Forms
{
    [FormScript("Default.City")]
    [BasedOnRow(typeof(CityRow), CheckNames = true)]
    public class CityForm
    {
        public string CityName { get; set; }
        public int CountryId { get; set; }

       //[LookupEditor(typeof(Entities.))]
    }
}