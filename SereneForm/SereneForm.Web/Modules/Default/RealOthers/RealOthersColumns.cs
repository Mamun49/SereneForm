using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Columns
{
    [ColumnsScript("Default.RealOthers")]
    [BasedOnRow(typeof(RealOthersRow), CheckNames = true)]
    public class RealOthersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int OtherId { get; set; }
        [EditLink]
        public string InvestOthers { get; set; }
    }
}