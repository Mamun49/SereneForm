using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Forms
{
    [FormScript("Admission.Investigation")]
    [BasedOnRow(typeof(InvestigationRow), CheckNames = true)]
    public class InvestigationForm
    {
        public string Haematology { get; set; }
        [Category("CBC")]
        [QuarterWidthAttribute]
        public string Hb { get; set; }
        //[CssClass("col-md-1")]
        ////[QuarterWidthAttribute]
        //public string Hblabel { get; set; }

        [CssClass("col-md-1")]
        [QuarterWidthAttribute]
        public string Esr { get; set; }
        [CssClass("col-md-1")]
        [QuarterWidthAttribute]
        //public string ESRlabel { get; set; }

//[QuarterWidthAttribute]
        public string Tc { get; set; }
        //[CssClass("col-md-1")]
        //public string TClabel { get; set; }

        [QuarterWidthAttribute]
        public string Plt { get; set; }
        [QuarterWidthAttribute]
        //public string PLTlabel { get; set; }
        //[QuarterWidthAttribute]
        public string N { get; set; }
        [QuarterWidthAttribute]
        //public string Nlabel { get; set; }
        //[QuarterWidthAttribute]
        public string L { get; set; }
        [QuarterWidthAttribute]
        //public string Llabel { get; set; }
        //[QuarterWidthAttribute]
        public string E { get; set; }
        [QuarterWidthAttribute]
        //public string Elabel { get; set; }
        //[QuarterWidthAttribute]
        public string Pcv { get; set; }
        
        [QuarterWidthAttribute]
        public string Mch { get; set; }
        //[QuarterWidthAttribute]
        //public string MCHlabel { get; set; }
        [QuarterWidthAttribute]
        public string Mchc { get; set; }
        //[QuarterWidthAttribute]
        //public string MCHClabel { get; set; }
        [Category("Blood Sugar")]
        [QuarterWidthAttribute]
        public string Fbs { get; set; }
        [QuarterWidthAttribute]
        //public string FBSlabel { get; set; }
        //public String HbLabel { get; set; }

        //[QuarterWidthAttribute]
        public string Ha75glucose { get; set; }
        [QuarterWidthAttribute]
        //public string HA75label { get; set; }
        //[QuarterWidthAttribute]
        public string Hbf { get; set; }
        [QuarterWidthAttribute]
        //public string HBFlabel { get; set; }
        //[QuarterWidthAttribute]
        public string HbA1C { get; set; }
        //[QuarterWidthAttribute]
        //public string HbA1Clabel { get; set; }

        [Category("PBF")]
        [QuarterWidthAttribute]
        public Int32Field Pbf { get; set; }
       
        [QuarterWidthAttribute]
        public string PbfAbnormal { get; set; }
        
        [Category("Urine RME")]
        [QuarterWidthAttribute]
        public string PusCell { get; set; }
        [QuarterWidthAttribute]
        public Int32Field Cast { get; set; }
        [QuarterWidthAttribute]
        public Int32Field Albumin { get; set; }
        [QuarterWidthAttribute]
        public Int32Field Suger { get; set; }
        [Category("S electronlyte")]
        [QuarterWidthAttribute]
        public string Na { get; set; }
        //[QuarterWidthAttribute]
        //public string Nalabel { get; set; }
        [QuarterWidthAttribute]
        public string K { get; set; }
        [QuarterWidthAttribute]
        //public string Klabel { get; set; }
        //[QuarterWidthAttribute]
        public string Hco3 { get; set; }
        [QuarterWidthAttribute]
        //public string HCO3label { get; set; }
        //[QuarterWidthAttribute]
        public string Cl { get; set; }
        [QuarterWidthAttribute]
        //public string Cllabel { get; set; }
        //[QuarterWidthAttribute]
        public string Ph { get; set; }
        //public string PHlabel { get; set; }
        [Category("Thyroid Panel")]
        [QuarterWidthAttribute]
        public string Tsh { get; set; }
        [QuarterWidthAttribute]
        //public string TSHlabel { get; set; }
        //[QuarterWidthAttribute]
        public string T3 { get; set; }
        [QuarterWidthAttribute]
        //public string T3label { get; set; }
        //[QuarterWidthAttribute]
        public string T4 { get; set; }
        [QuarterWidthAttribute]
        //public string T4label { get; set; }
        //[QuarterWidthAttribute]
        public string Ft3 { get; set; }
        [QuarterWidthAttribute]
        //public string FT3label { get; set; }
        //[QuarterWidthAttribute]
        public string Ft4 { get; set; }
        [QuarterWidthAttribute]
        //public string FT4label { get; set; }
        //[QuarterWidthAttribute]
        public string ThyroidScan { get; set; }

        [QuarterWidthAttribute]
        public string AntiTpoAntibody { get; set; }
        [QuarterWidthAttribute]
        public Int32Field TrAb { get; set; }
        [Category("RFT")]
        [QuarterWidthAttribute]
        public string SCreatinine { get; set; }
        [QuarterWidthAttribute]
        //public string Slabel { get; set; }
        //[QuarterWidthAttribute]
        public string BLoodUrea { get; set; }
        [QuarterWidthAttribute]
        //public string Bloodlabel { get; set; }
        //[QuarterWidthAttribute]
        public string UrineForAcr { get; set; }
        [QuarterWidthAttribute]
        //public string ACRlabel { get; set; }
        //[QuarterWidthAttribute]
        public string UrineForPcr { get; set; }
        //[QuarterWidthAttribute]
        //public string PCRlabel { get; set; }
        [Category("LFT")]
        [QuarterWidthAttribute]
        public string SBilirubinTotal { get; set; }
        [QuarterWidthAttribute]
        public string SBilirubinDirect { get; set; }
        [QuarterWidthAttribute]
        public string SBilirubinIndirect { get; set; }
        [QuarterWidthAttribute]
        public string Alt { get; set; }
        [QuarterWidthAttribute]
        public string Ast { get; set; }
        [QuarterWidthAttribute]
        public string GammaGt { get; set; }
        [QuarterWidthAttribute]
        public string SAlkalinePhosphatase { get; set; }
        [QuarterWidthAttribute]
        public string ProthrombinTime { get; set; }
        [QuarterWidthAttribute]
        public string Inr { get; set; }
        [QuarterWidthAttribute]
        public string SAlbumin { get; set; }
        [QuarterWidthAttribute]
        public string AgRatio { get; set; }
        [Category("Radiology and Imaging")]
        [OneThirdWidth]
        public string XrayOf { get; set; }
        [OneThirdWidth]
        [TextAreaEditor(Rows = 3)]
        public string ResultOfXray { get; set; }
        [OneThirdWidth]
        [MultipleFileUploadEditor(FilenameFormat = "Attachment/~", CopyToHistory = true)]
        public string File { get; set; }
        [OneThirdWidth]
        public string CtOf { get; set; }
        [OneThirdWidth]
        [TextAreaEditor(Rows=3)]
        public string ResultOfCt { get; set; }
        [OneThirdWidth]
        [MultipleFileUploadEditor(FilenameFormat = "Attachment/~", CopyToHistory = true)]
        public string CtFile { get; set; }
        [OneThirdWidth]
        public string MriOf { get; set; }
        [OneThirdWidth]
        [TextAreaEditor(Rows=3)]
        public string ResultOfMri { get; set; }
        [OneThirdWidth]

        [MultipleFileUploadEditor(FilenameFormat = "Attachment/~", CopyToHistory = true)]
        public string MriFile { get; set; }
        [OneThirdWidth]
        public string UsgOf { get; set; }
        [OneThirdWidth]
        [TextAreaEditor(Rows = 3)]

        public string ResultOfUsg { get; set; }
        [OneThirdWidth]
        [MultipleFileUploadEditor(FilenameFormat = "Attachment/~", CopyToHistory = true)]
        public string UsgFile { get; set; }
        [Category("Infection Screen")]
        [OneThirdWidth]
        public Int32Field Ns1 { get; set; }
        [OneThirdWidth]
        public Int32Field IctOfDengue { get; set; }
        [OneThirdWidth]
        public Int32Field MP { get; set; }
        //[QuarterWidthAttribute]
        //public Int32Field IctforMalaria { get; set; }
        [OneThirdWidth]
        public string CorS { get; set; }
        [OneThirdWidth]
        //[TextAreaEditor(Rows = 3)]
        public string ResultOfCorS { get; set; }
        [OneThirdWidth]
        public string Others { get; set; }
        [Category("Coagulation Profile")]
        [QuarterWidthAttribute]
        public string Bt { get; set; }
        [QuarterWidthAttribute]
        public string Ct { get; set; }
        [QuarterWidthAttribute]
        public string Aptt { get; set; }
        [QuarterWidthAttribute]
        public string AppTcontrol { get; set; }
        [QuarterWidthAttribute]
        public string Pt { get; set; }
        [QuarterWidthAttribute]
        public string PTcontrol { get; set; }
        [QuarterWidthAttribute]
        public string DDimer { get; set; }
        [QuarterWidthAttribute]
        public string Otherofcoagulation { get; set; }
        [Category("Rheumatology")]
        [QuarterWidthAttribute]
        public string Crp { get; set; }
        [QuarterWidthAttribute]
        public string Ana { get; set; }
        [QuarterWidthAttribute]
        public string AntiDsDna { get; set; }
        [QuarterWidthAttribute]
        public string RaFactor { get; set; }
        [QuarterWidthAttribute]
        public string AntiCcp { get; set; }
        [QuarterWidthAttribute]
        public string CAnca { get; set; }
        [QuarterWidthAttribute]
        public string PAnca { get; set; }
        [QuarterWidthAttribute]
        public string Othersofrheumatology { get; set; }
        
        
        [Category("Others and Options")]
        [HalfWidth]
        [TextAreaEditor(Rows = 5)]
        public string Realothers { get; set; }
        [HalfWidth]

        [FileUploadEditor(FilenameFormat = "Attachment/~", CopyToHistory = true)]
        public string addtoRealothers { get; set; }
    }
}


