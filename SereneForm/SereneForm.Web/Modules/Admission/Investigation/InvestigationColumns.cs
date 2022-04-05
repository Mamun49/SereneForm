using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Columns
{
    [ColumnsScript("Admission.Investigation")]
    [BasedOnRow(typeof(InvestigationRow), CheckNames = true)]
    public class InvestigationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int InvId { get; set; }
        [EditLink]
        public string Haematology { get; set; }
        public string Hb { get; set; }
        public string Esr { get; set; }
        public string Tc { get; set; }
        public string Plt { get; set; }
        public string N { get; set; }
        public string L { get; set; }
        //public string E { get; set; }
        //public string Pcv { get; set; }
        //public string Mch { get; set; }
        //public string Mchc { get; set; }
        //public string Fbs { get; set; }
        //public string Ha75glucose { get; set; }
        //public string Hbf { get; set; }
        //public string HbA1C { get; set; }
        //public string Pbf { get; set; }
        //public string PbfAbnormal { get; set; }
        //public string PusCell { get; set; }
        //public string Cast { get; set; }
        //public string Albumin { get; set; }
        //public string Suger { get; set; }
        //public string Na { get; set; }
        //public string K { get; set; }
        //public string Hco3 { get; set; }
        //public string Cl { get; set; }
        //public string Ph { get; set; }
        //public string Tsh { get; set; }
        //public string T3 { get; set; }
        //public string T4 { get; set; }
        //public string Ft3 { get; set; }
        //public string Ft4 { get; set; }
        //public string ThyroidScan { get; set; }
        //public string AntiTpoAntibody { get; set; }
        //public string TrAb { get; set; }
        //public string SCreatinine { get; set; }
        //public string BLoodUrea { get; set; }
        //public string UrineForAcr { get; set; }
        //public string UrineForPcr { get; set; }
        //public string SBilirubinTotal { get; set; }
        //public string SBilirubinDirect { get; set; }
        //public string SBilirubinIndirect { get; set; }
        //public string Alt { get; set; }
        //public string Ast { get; set; }
        //public string GammaGt { get; set; }
        //public string SAlkalinePhosphatase { get; set; }
        //public string ProthrombinTime { get; set; }
        //public string Inr { get; set; }
        //public string SAlbumin { get; set; }
        //public string AgRatio { get; set; }
        //public string XrayOf { get; set; }
        //public string ResultOfXray { get; set; }
        //public string File { get; set; }
        //public string CtOf { get; set; }
        //public string ResultOfCt { get; set; }
        //public string CtFile { get; set; }
        //public string MriOf { get; set; }
        //public string ResultOfMri { get; set; }
        //public string MriFile { get; set; }
        //public string UsgOf { get; set; }
        //public string ResultOfUsg { get; set; }
        //public string UsgFile { get; set; }
        //public string Ns1 { get; set; }
        //public string IctOfDengue { get; set; }
        //public string CorS { get; set; }
        //public string MP { get; set; }
        //public string ResultOfCorS { get; set; }
        //public string Others { get; set; }
        //public string Bt { get; set; }
        //public string Ct { get; set; }
        //public string Aptt { get; set; }
        //public string AppTcontrol { get; set; }
        //public string Pt { get; set; }
        //public string PTcontrol { get; set; }
        //public string DDimer { get; set; }
        //public string Otherofcoagulation { get; set; }
        //public string Crp { get; set; }
        //public string Ana { get; set; }
        //public string AntiDsDna { get; set; }
        //public string RaFactor { get; set; }
        //public string AntiCcp { get; set; }
        //public string CAnca { get; set; }
        //public string PAnca { get; set; }
        //public string Othersofrheumatology { get; set; }
        //public string Realothers { get; set; }
    }
}