using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Country]")]
    [DisplayName("Country"), InstanceName("Country")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Country")]
    public sealed class CountryRow : Row<CountryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Country Id"), Identity, IdProperty]
        public int? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }

        [DisplayName("Country Name"), Size(50), QuickSearch, NameProperty]
        public string CountryName
        {
            get => fields.CountryName[this];
            set => fields.CountryName[this] = value;
        }

        public CountryRow()
            : base()
        {
        }

        public CountryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CountryId;
            public StringField CountryName;
        }
    }
}
