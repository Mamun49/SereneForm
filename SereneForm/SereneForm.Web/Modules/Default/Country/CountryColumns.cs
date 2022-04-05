using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Columns
{
    [ColumnsScript("Default.Country")]
    [BasedOnRow(typeof(CountryRow), CheckNames = true)]
    public class CountryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int CountryId { get; set; }
        [EditLink]
        public string CountryName { get; set; }
    }
}