using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Columns
{
    [ColumnsScript("Admission.FollowUp")]
    [BasedOnRow(typeof(FollowUpRow), CheckNames = true)]
    public class FollowUpColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int FollId { get; set; }
        [EditLink]
        public string Subjective { get; set; }
        public string Pulse { get; set; }
        public string Bp { get; set; }
        public string Temp { get; set; }
        public string Rr { get; set; }
        public string Urineoutput { get; set; }
        public string SpO2 { get; set; }
        public string ObjectiveOther { get; set; }
        public string Condition { get; set; }
        public string Newdiagnosis { get; set; }
        public string Investigation { get; set; }
        public string Consultation { get; set; }
        public string Discharge { get; set; }
    }
}