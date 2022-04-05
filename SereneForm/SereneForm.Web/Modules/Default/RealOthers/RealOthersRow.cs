using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RealOthers]")]
    [DisplayName("Real Others"), InstanceName("Real Others")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.RealOthers")]
    public sealed class RealOthersRow : Row<RealOthersRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Other Id"), Identity, IdProperty]
        public int? OtherId
        {
            get => fields.OtherId[this];
            set => fields.OtherId[this] = value;
        }

        [DisplayName("Invest Others"), Size(50), QuickSearch, NameProperty]
        public string InvestOthers
        {
            get => fields.InvestOthers[this];
            set => fields.InvestOthers[this] = value;
        }

        public RealOthersRow()
            : base()
        {
        }

        public RealOthersRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OtherId;
            public StringField InvestOthers;
        }
    }
}
