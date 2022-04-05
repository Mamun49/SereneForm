using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Columns
{
    [ColumnsScript("Default.PusCell")]
    [BasedOnRow(typeof(PusCellRow), CheckNames = true)]
    public class PusCellColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int PuscellId { get; set; }
        [EditLink]
        public string HpmData { get; set; }
    }
}