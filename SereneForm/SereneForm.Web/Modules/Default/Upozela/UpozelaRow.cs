using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Upozela]")]
    [DisplayName("Upozela"), InstanceName("Upozela")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Upozela")]
    public sealed class UpozelaRow : Row<UpozelaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("UpozelaId"), Identity, IdProperty]
        public int? UpozelaId
        {
            get => fields.UpozelaId[this];
            set => fields.UpozelaId[this] = value;
        }

        [DisplayName("Upozela Name"), Size(50), QuickSearch, NameProperty]
        public string UpozelaName
        {
            get => fields.UpozelaName[this];
            set => fields.UpozelaName[this] = value;
        }

        [DisplayName("City Id"), ForeignKey("[dbo].[City]", "CityId"), LeftJoin("jCity"), TextualField("CityCityName"), LookupInclude]
        [LookupEditor(typeof(CityRow), InplaceAdd = true)]
        public int? CityId
        {
            get => fields.CityId[this];
            set => fields.CityId[this] = value;
        }
        [DisplayName("City City Name"), Expression("jCity.[CityName]")]
        public string CityCityName
        {
            get => fields.CityCityName[this];
            set => fields.CityCityName[this] = value;
        }

        public UpozelaRow()
            : base()
        {
        }

        public UpozelaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UpozelaId;
            public StringField UpozelaName;
            public Int32Field CityId;
            public StringField CityCityName;    
        }
    }
}
