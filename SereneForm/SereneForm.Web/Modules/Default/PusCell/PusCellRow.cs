using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[PusCell]")]
    [DisplayName("Pus Cell"), InstanceName("Pus Cell")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.PusCell")]
    public sealed class PusCellRow : Row<PusCellRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Puscell Id"), Identity, IdProperty]
        public int? PuscellId
        {
            get => fields.PuscellId[this];
            set => fields.PuscellId[this] = value;
        }

        [DisplayName("Hpm Data"), Column("HPMdata"), Size(50), QuickSearch, NameProperty]
        public string HpmData
        {
            get => fields.HpmData[this];
            set => fields.HpmData[this] = value;
        }

        public PusCellRow()
            : base()
        {
        }

        public PusCellRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PuscellId;
            public StringField HpmData;
        }
    }
}
