using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Columns
{
    [ColumnsScript("Default.City")]
    [BasedOnRow(typeof(CityRow), CheckNames = true)]
    public class CityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int CityId { get; set; }
        [EditLink]
        public string CityName { get; set; }
        public String CountryCountryName { get; set; }
    }
}