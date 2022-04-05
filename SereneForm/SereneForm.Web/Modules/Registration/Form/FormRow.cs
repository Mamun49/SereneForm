using SereneForm.Default;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Registration
{
    [ConnectionKey("Default"), Module("Registration"), TableName("[reg].[Form]")]
    [DisplayName("Form"), InstanceName("Form")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FormRow : Row<FormRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Reg Id"), Identity, IdProperty]
        public int? RegId
        {
            get => fields.RegId[this];
            set => fields.RegId[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Mail"), Size(1000)]
        public string Mail
        {
            get => fields.Mail[this];
            set => fields.Mail[this] = value;
        }

        [DisplayName("Address")]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Mobile Number"), Column("Mobile Number")]
        public int? MobileNumber
        {
            get => fields.MobileNumber[this];
            set => fields.MobileNumber[this] = value;
        }

        [DisplayName("Dob"), Column("DOB")]
        public DateTime? Dob
        {
            get => fields.Dob[this];
            set => fields.Dob[this] = value;
        }
        //[DisplayName("CityId"), Identity, IdProperty]
        //public int? CityId
        //{
        //    get => fields.CityId[this];
        //    set => fields.CityId[this] = value;
        //}
        //[DisplayName("CountryId"), Identity, IdProperty]
        //public int? CountryId
        //{
        //    get => fields.CountryId[this];
        //    set => fields.CountryId[this] = value;
       // }

        [DisplayName("Country"),ForeignKey("[dbo].[Country]","CountryId"),LeftJoin("jCountry")]
        [LookupEditor(typeof(CountryRow))]
        public Int32? CountryId
        {
            get => fields.CountryId[this];
            set => fields.CountryId[this] = value;
        }
        [DisplayName("City"), ForeignKey("[dbo].[City]", "CityId"), LeftJoin("jCity")]
        [LookupEditor(typeof(CityRow), CascadeFrom = "CountryId",InplaceAdd =true)]
        public Int32? CityId
        {
            get => fields.CityId[this];
            set => fields.CityId[this] = value;
        }
        [DisplayName("Upozela"), ForeignKey("[dbo].[Upozela]", "UpozelaId"), LeftJoin("jUpozela")]
        [LookupEditor(typeof(UpozelaRow), CascadeFrom = "CityId", InplaceAdd = true)]
        public Int32? UpozelaId
        {
            get => fields.UpozelaId[this];
            set => fields.UpozelaId[this] = value;
        }

        public FormRow()
            : base()
        {
        }

        public FormRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegId;
            public StringField Name;
            public StringField Mail;
            public StringField Address;
            public Int32Field MobileNumber;
            public DateTimeField Dob;
            public Int32Field CityId;
            public Int32Field CountryId;
            public Int32Field UpozelaId;
            //public Int32Field State;
        }
    }
}
