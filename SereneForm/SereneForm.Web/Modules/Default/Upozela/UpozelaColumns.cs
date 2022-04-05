using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Columns
{
    [ColumnsScript("Default.Upozela")]
    [BasedOnRow(typeof(UpozelaRow), CheckNames = true)]
    public class UpozelaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int UpozelaId { get; set; }
        [EditLink]
        public string UpozelaName { get; set; }
        public string CityCityName { get; set; }
    }
}