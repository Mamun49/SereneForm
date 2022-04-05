using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Default.Forms
{
    [FormScript("Default.Upozela")]
    [BasedOnRow(typeof(UpozelaRow), CheckNames = true)]
    public class UpozelaForm
    {
        public int UpozelaId { get; set; } 
        public string UpozelaName { get; set; }
        public int CityId { get; set; }
    }
}