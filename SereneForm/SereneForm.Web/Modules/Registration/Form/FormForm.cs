using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Registration.Forms
{
    [FormScript("Registration.Form")]
    [BasedOnRow(typeof(FormRow), CheckNames = true)]
    public class FormForm
    {
        public string Name { get; set; }
        public string Mail { get; set; }
        public string Address { get; set; }
        public int MobileNumber { get; set; } 
        public DateTime Dob { get; set; }
        [OneThirdWidth]
        public Int32 CountryId { get; set; }
        [OneThirdWidth]
        public Int32 CityId { get; set; }
        [OneThirdWidth]
        public Int32 UpozelaId { get; set; }
    }
}