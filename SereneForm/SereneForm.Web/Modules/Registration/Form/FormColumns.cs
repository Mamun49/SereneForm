using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Registration.Columns
{
    [ColumnsScript("Registration.Form")]
    [BasedOnRow(typeof(FormRow), CheckNames = true)]
    public class FormColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int RegId { get; set; }
        [EditLink]
        public string Name { get; set; }
        public string Mail { get; set; }
        public string Address { get; set; }
        public int MobileNumber { get; set; }
        public DateTime Dob { get; set; }
        public int CityId { get; set; }
        public int CountryId { get; set; }
        public int UpozelaId { get; set; }
    }
}