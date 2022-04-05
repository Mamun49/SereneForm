using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Forms
{
    [FormScript("Admission.FollowUp")]
    [BasedOnRow(typeof(FollowUpRow), CheckNames = true)]
    public class FollowUpForm
    {
        [Category("Subjective")]
        [TextAreaEditor(Rows = 3)]
        public string Subjective { get; set; }
     
        [Category("Objective")]
        [OneThirdWidth]
        public string Pulse { get; set; }
        [OneThirdWidth]
        public string Bp { get; set; }
        [OneThirdWidth]
        public string Temp { get; set; }
        [OneThirdWidth]
        public string Rr { get; set; }
        [OneThirdWidth]
        public string Urineoutput { get; set; }
        [OneThirdWidth]
        public string SpO2 { get; set; }
        
        [TextAreaEditor(Rows =3)]
        public string ObjectiveOther { get; set; }
        [Category("Assessment")]
        [HalfWidth]
        public Int32Field Condition { get; set; }
        [HalfWidth]
        public string Newdiagnosis { get; set; }
        [Category("Plan")]
        [OneThirdWidth]
        [TextAreaEditor(Rows = 3)]
        public string Investigation { get; set; }
        [OneThirdWidth]
        [TextAreaEditor(Rows = 3)]
        public string Consultation { get; set; }
        [OneThirdWidth]
        public Int32Field Discharge { get; set; }
    }
}