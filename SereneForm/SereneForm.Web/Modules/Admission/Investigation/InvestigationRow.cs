using SereneForm.Admission.Forms;
using SereneForm.Default;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Admission
{
    [ConnectionKey("Default"), Module("Admission"), TableName("[dbo].[Investigation]")]
    [DisplayName("Investigation"), InstanceName("Investigation")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class InvestigationRow : Row<InvestigationRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Inv Id"), Identity, IdProperty]
        public int? InvId
        {
            get => fields.InvId[this];
            set => fields.InvId[this] = value;
        }

        [DisplayName("Haematology"), Size(50), QuickSearch, NameProperty]
        public string Haematology
        {
            get => fields.Haematology[this];
            set => fields.Haematology[this] = value;
        }

        [DisplayName("HB(mg/dl)"), Size(50)]
        public string Hb
        {
            get => fields.Hb[this];
            set => fields.Hb[this] = value;
        }

        [DisplayName("ESR(mm in 1st hr)"), Column("ESR"), Size(10)]
        public string Esr
        {
            get => fields.Esr[this];
            set => fields.Esr[this] = value;
        }

        [DisplayName("TC(/x10³)"), Column("TC"), Size(50)]
        public string Tc
        {
            get => fields.Tc[this];
            set => fields.Tc[this] = value;
        }

        [DisplayName("PLT(/cmm)"), Column("PLT"), Size(50)]
        public string Plt
        {
            get => fields.Plt[this];
            set => fields.Plt[this] = value;
        }

        [DisplayName("N(%)"), Size(50)]
        public string N
        {
            get => fields.N[this];
            set => fields.N[this] = value;
        }

        [DisplayName("L(%)"), Size(50)]
        public string L
        {
            get => fields.L[this];
            set => fields.L[this] = value;
        }

        [DisplayName("E(%)"), Size(50)]
        public string E
        {
            get => fields.E[this];
            set => fields.E[this] = value;
        }

        [DisplayName("PCV"), Column("PCV"), Size(50)]
        public string Pcv
        {
            get => fields.Pcv[this];
            set => fields.Pcv[this] = value;
        }

        [DisplayName("MCH(pg)(Normal:29.5±2.5)"), Column("MCH"), Size(50)]
        public string Mch
        {
            get => fields.Mch[this];
            set => fields.Mch[this] = value;
        }

        [DisplayName("MCHC(Normal:30±1.5)"), Column("MCHC"), Size(50)]
        public string Mchc
        {
            get => fields.Mchc[this];
            set => fields.Mchc[this] = value;
        }

        [DisplayName("FBS(mg/dl)"), Column("FBS"), Size(50)]
        public string Fbs
        {
            get => fields.Fbs[this];
            set => fields.Fbs[this] = value;
        }

        [DisplayName("2Ha75 Glucose(mg/dl)"), Column("HA75glucose"), Size(50)]
        public string Ha75glucose
        {
            get => fields.Ha75glucose[this];
            set => fields.Ha75glucose[this] = value;
        }

        [DisplayName("2HBF(mg/dl)"), Column("HBF"), Size(50)]
        public string Hbf
        {
            get => fields.Hbf[this];
            set => fields.Hbf[this] = value;
        }

        [DisplayName("HbA1C(%)"), Size(50)]
        public string HbA1C
        {
            get => fields.HbA1C[this];
            set => fields.HbA1C[this] = value;
        }

        [DisplayName("PBF"), Column("PBF"), Size(50)]
        public pbfNormal? Pbf
        {
            get => (pbfNormal?)fields.Pbf[this];
            set => fields.Pbf[this] = (Int32?)value;
        }
        //[NotMapped]

        [NotMapped, DisplayName("PBF Abnormal"), Column("PBFAbnormal"), Size(50)]
        public string PbfAbnormal
        {
            get => fields.PbfAbnormal[this];
            set => fields.PbfAbnormal[this] = value;
        }

       // [LookupEditor(typeof(PusCellRow), InplaceAdd = true)]
        [DisplayName("Pus Cell"), Column("Puscell"), Size(50)]
        [LookupEditor(typeof(PusCellRow), InplaceAdd = true) ]
        public pus? PusCell
        {
            get => (pus?)fields.PusCell[this];
            set => fields.PusCell[this] = (Int32?)value;
        }

        [DisplayName("Cast"), Size(50)]
        public cast? Cast
        {
            get => (cast?)fields.Cast[this];
            set => fields.Cast[this] =(Int32?) value;
        }

        [DisplayName("Albumin"), Size(50)]
        public albumin? Albumin
        {
            get => (albumin?)fields.Albumin[this];
            set => fields.Albumin[this] = (Int32?)value;
        }

        [DisplayName("Suger"), Size(50)]
        public albumin? Suger
        {
            get => (albumin?)fields.Suger[this];
            set => fields.Suger[this] =(Int32?) value;
        }

        [DisplayName("Na(mmol/L)"), Size(50)]
        public string Na
        {
            get => fields.Na[this];
            set => fields.Na[this] = value;
        }

        [DisplayName("K(mmol/L)"), Size(50)]
        public string K
        {
            get => fields.K[this];
            set => fields.K[this] = value;
        }

        [DisplayName("HCO3(mmol/L)"), Column("HCO3"), Size(50)]
        public string Hco3
        {
            get => fields.Hco3[this];
            set => fields.Hco3[this] = value;
        }

        [DisplayName("Cl(mmol/L)"), Size(50)]
        public string Cl
        {
            get => fields.Cl[this];
            set => fields.Cl[this] = value;
        }

        [DisplayName("Pʜ"), Column("PH"), Size(50)]
        public string Ph
        {
            get => fields.Ph[this];
            set => fields.Ph[this] = value;
        }

        [DisplayName("TSH(μΙU/L)"), Column("TSH"), Size(50)]
        public string Tsh
        {
            get => fields.Tsh[this];
            set => fields.Tsh[this] = value;
        }

        [DisplayName("T3(ng/dl)"), Size(50)]
        public string T3
        {
            get => fields.T3[this];
            set => fields.T3[this] = value;
        }

        [DisplayName("T4(ng/dl)"), Size(50)]
        public string T4
        {
            get => fields.T4[this];
            set => fields.T4[this] = value;
        }

        [DisplayName("FT3(ng/dl)"), Column("FT3"), Size(50)]
        public string Ft3
        {
            get => fields.Ft3[this];
            set => fields.Ft3[this] = value;
        }

        [DisplayName("FT4(ng/dl)"), Column("FT4"), Size(50)]
        public string Ft4
        {
            get => fields.Ft4[this];
            set => fields.Ft4[this] = value;
        }

        [DisplayName("Thyroid Scan"), Column("ThyroidScan"), Size(50)]
        public string ThyroidScan
        {
            get => fields.ThyroidScan[this];
            set => fields.ThyroidScan[this] = value;
        }

        [DisplayName("Anti Tpo Antibody"), Column("AntiTPOantibody"), Size(50)]
        public string AntiTpoAntibody
        {
            get => fields.AntiTpoAntibody[this];
            set => fields.AntiTpoAntibody[this] = value;
        }

        [DisplayName("TR Ab"), Column("TRAb"), Size(50)]
        public trpresent? TrAb
        {
            get => (trpresent?)fields.TrAb[this];
            set => fields.TrAb[this] = (Int32?)value;
        }

        [DisplayName("S Creatinine(mg/dl)"), Column("SCreatinine"), Size(50)]
        public string SCreatinine
        {
            get => fields.SCreatinine[this];
            set => fields.SCreatinine[this] = value;
        }

        [DisplayName("BLood Urea(mg/dl)"), Column("BLoodurea"), Size(50)]
        public string BLoodUrea
        {
            get => fields.BLoodUrea[this];
            set => fields.BLoodUrea[this] = value;
        }

        [DisplayName("Urine For ACR(mg/dl)"), Column("UrineforACR"), Size(50)]
        public string UrineForAcr
        {
            get => fields.UrineForAcr[this];
            set => fields.UrineForAcr[this] = value;
        }

        [DisplayName("Urine For PCR(mg/gm)"), Column("UrineforPCR"), Size(50)]
        public string UrineForPcr
        {
            get => fields.UrineForPcr[this];
            set => fields.UrineForPcr[this] = value;
        }

        [DisplayName("S Bilirubin Total(mg/dl)"), Column("SbilirubinTotal"), Size(50)]
        public string SBilirubinTotal
        {
            get => fields.SBilirubinTotal[this];
            set => fields.SBilirubinTotal[this] = value;
        }

        [DisplayName("S Bilirubin Direct(mg/dl)"), Column("Sbilirubindirect"), Size(50)]
        public string SBilirubinDirect
        {
            get => fields.SBilirubinDirect[this];
            set => fields.SBilirubinDirect[this] = value;
        }

        [DisplayName("S Bilirubin Indirect(mg/dl)"), Column("Sbilirubinindirect"), Size(50)]
        public string SBilirubinIndirect
        {
            get => fields.SBilirubinIndirect[this];
            set => fields.SBilirubinIndirect[this] = value;
        }

        [DisplayName("ALT(IU/L)"), Column("ALT"), Size(50)]
        public string Alt
        {
            get => fields.Alt[this];
            set => fields.Alt[this] = value;
        }

        [DisplayName("AST(IU/l)"), Column("AST"), Size(50)]
        public string Ast
        {
            get => fields.Ast[this];
            set => fields.Ast[this] = value;
        }

        [DisplayName("Gamma GT(IU/L)"), Column("GammaGT"), Size(50)]
        public string GammaGt
        {
            get => fields.GammaGt[this];
            set => fields.GammaGt[this] = value;
        }

        [DisplayName("S. Alkaline Phosphatase"), Column("SAlkalinePhosphatase"), Size(50)]
        public string SAlkalinePhosphatase
        {
            get => fields.SAlkalinePhosphatase[this];
            set => fields.SAlkalinePhosphatase[this] = value;
        }

        [DisplayName("Prothrombin Time(min prolonged)"), Column("ProthrombinTime"), Size(50)]
        public string ProthrombinTime
        {
            get => fields.ProthrombinTime[this];
            set => fields.ProthrombinTime[this] = value;
        }

        [DisplayName("INR"), Column("INR"), Size(50)]
        public string Inr
        {
            get => fields.Inr[this];
            set => fields.Inr[this] = value;
        }

        [DisplayName("S Albumin(g/dl)"), Column("Salbumin"), Size(50)]
        public string SAlbumin
        {
            get => fields.SAlbumin[this];
            set => fields.SAlbumin[this] = value;
        }

        [DisplayName("AG Ratio"), Column("AGratio"), Size(50)]
        public string AgRatio
        {
            get => fields.AgRatio[this];
            set => fields.AgRatio[this] = value;
        }

        [DisplayName("Xray Of"), Column("Xrayof"), Size(50)]
        public string XrayOf
        {
            get => fields.XrayOf[this];
            set => fields.XrayOf[this] = value;
        }

        [DisplayName("Result Of Xray"), Column("ResultofXray"), Size(50), QuickSearch]
        public string ResultOfXray
        {
            get => fields.ResultOfXray[this];
            set => fields.ResultOfXray[this] = value;
        }

        [DisplayName("Report File"), Size(50)]
        public string File
        {
            get => fields.File[this];
            set => fields.File[this] = value;
        }

        [DisplayName("CT Of"), Column("CTof"), Size(50)]
        public string CtOf
        {
            get => fields.CtOf[this];
            set => fields.CtOf[this] = value;
        }

        [DisplayName("Result Of CT"), Column("ResultofCT"), Size(50)]
        public string ResultOfCt
        {
            get => fields.ResultOfCt[this];
            set => fields.ResultOfCt[this] = value;
        }

        [DisplayName("Report File"), Column("CTfile"), Size(50)]
        public string CtFile
        {
            get => fields.CtFile[this];
            set => fields.CtFile[this] = value;
        }

        [DisplayName("MRI Of"), Column("MRIof"), Size(50)]
        public string MriOf
        {
            get => fields.MriOf[this];
            set => fields.MriOf[this] = value;
        }

        [DisplayName("Result Of MRI"), Column("ResultofMRI"), Size(50)]
        public string ResultOfMri
        {
            get => fields.ResultOfMri[this];
            set => fields.ResultOfMri[this] = value;
        }

        [DisplayName("Report File"), Column("MRIfile"), Size(50)]
        public string MriFile
        {
            get => fields.MriFile[this];
            set => fields.MriFile[this] = value;
        }

        [DisplayName("USG Of"), Column("USGof"), Size(50)]
        public string UsgOf
        {
            get => fields.UsgOf[this];
            set => fields.UsgOf[this] = value;
        }

        [DisplayName("Result Of USG"), Column("ResultofUSG"), Size(50)]
        public string ResultOfUsg
        {
            get => fields.ResultOfUsg[this];
            set => fields.ResultOfUsg[this] = value;
        }

        [DisplayName("Report File"), Column("USGfile"), Size(50)]
        public string UsgFile
        {
            get => fields.UsgFile[this];
            set => fields.UsgFile[this] = value;
        }

        [DisplayName("NS1"), Column("NS1"), Size(50)]
        public ns1enum? Ns1
        {
            get => (ns1enum?)fields.Ns1[this];
            set => fields.Ns1[this] = (Int32?)value;
        }

        [DisplayName("ICT Of Dengue"), Column("ICTofDengue"), Size(50)]
        public ictdengue? IctOfDengue
        {
            get => (ictdengue?)fields.IctOfDengue[this];
            set => fields.IctOfDengue[this] = (Int32?)value;
        }

        //[LookupEditor(typeof(InvestigationRow), InplaceAdd = true)]
        [DisplayName("MP"), Column("MP"), Size(50)]
        public mpenum? MP
        {
            get => (mpenum?)fields.MP[this];
            set => fields.MP[this] = (Int32?)value;
        }

        [DisplayName("C/S"), Size(50)]
        public string CorS
        {
            get => fields.CorS[this];
            set => fields.CorS[this] = value;
        }

        [DisplayName("Result Of C/S"), Column("ResultofCorS"), Size(50)]
        public string ResultOfCorS
        {
            get => fields.ResultOfCorS[this];
            set => fields.ResultOfCorS[this] = value;
        }

        [DisplayName("Others"), Size(50)]
        public string Others
        {
            get => fields.Others[this];
            set => fields.Others[this] = value;
        }

        [DisplayName("BT(min)"), Column("BT"), Size(50)]
        public string Bt
        {
            get => fields.Bt[this];
            set => fields.Bt[this] = value;
        }

        [DisplayName("CT(min)"), Column("CT"), Size(50)]
        public string Ct
        {
            get => fields.Ct[this];
            set => fields.Ct[this] = value;
        }

        [DisplayName("APTT Patient(min)"), Column("APTT"), Size(50)]
        public string Aptt
        {
            get => fields.Aptt[this];
            set => fields.Aptt[this] = value;
        }

        [DisplayName("APTT Control(min)"), Column("APPTcontrol"), Size(50)]
        public string AppTcontrol
        {
            get => fields.AppTcontrol[this];
            set => fields.AppTcontrol[this] = value;
        }

        [DisplayName("PT Patient(min)"), Column("PT"), Size(50)]
        public string Pt
        {
            get => fields.Pt[this];
            set => fields.Pt[this] = value;
        }

        [DisplayName("PT Control(min)"), Size(50)]
        public string PTcontrol
        {
            get => fields.PTcontrol[this];
            set => fields.PTcontrol[this] = value;
        }

        [DisplayName("D Dimer(mg/L)"), Column("Ddimer"), Size(50)]
        public string DDimer
        {
            get => fields.DDimer[this];
            set => fields.DDimer[this] = value;
        }

        [DisplayName("Others"), Column("otherofcoagulation"), Size(50)]
        public string Otherofcoagulation
        {
            get => fields.Otherofcoagulation[this];
            set => fields.Otherofcoagulation[this] = value;
        }

        [DisplayName("CRP"), Column("CRP"), Size(50)]
        public string Crp
        {
            get => fields.Crp[this];
            set => fields.Crp[this] = value;
        }

        [DisplayName("ANA"), Column("ANA"), Size(50)]
        public string Ana
        {
            get => fields.Ana[this];
            set => fields.Ana[this] = value;
        }

        [DisplayName("Anti Ds Dna"), Column("AntidsDNA"), Size(50)]
        public string AntiDsDna
        {
            get => fields.AntiDsDna[this];
            set => fields.AntiDsDna[this] = value;
        }

        [DisplayName("Ra Factor"), Column("RAFactor"), Size(50)]
        public string RaFactor
        {
            get => fields.RaFactor[this];
            set => fields.RaFactor[this] = value;
        }

        [DisplayName("Anti Ccp"), Column("AntiCCP"), Size(50)]
        public string AntiCcp
        {
            get => fields.AntiCcp[this];
            set => fields.AntiCcp[this] = value;
        }

        [DisplayName("C Anca"), Column("CANCA"), Size(50)]
        public string CAnca
        {
            get => fields.CAnca[this];
            set => fields.CAnca[this] = value;
        }

        [DisplayName("P Anca"), Column("PANCA"), Size(50)]
        public string PAnca
        {
            get => fields.PAnca[this];
            set => fields.PAnca[this] = value;
        }

        [DisplayName("Others"), Size(50)]
        public string Othersofrheumatology
        {
            get => fields.Othersofrheumatology[this];
            set => fields.Othersofrheumatology[this] = value;
        }
        
        [DisplayName(""), Size(50)]
        //[LookupEditor(typeof(RealOthersRow), InplaceAdd = true), NotMapped]
        public string Realothers
        {
            get => fields.Realothers[this];
            set => fields.Realothers[this] = value;
        }
        [DisplayName("Attachment"), Size(50)]
        public string addtoRealothers
        {
            get => fields.Realothers[this];
            set => fields.Realothers[this] = value;
        }
        
        
        public InvestigationRow()
            : base()
        {
        }

        public InvestigationRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field InvId;
            public StringField Haematology;
            public StringField Hb;
            public StringField Esr;
            public StringField Tc;
            public StringField Plt;
            public StringField N;
            public StringField L;
            public StringField E;
            public StringField Pcv;
            public StringField Mch;
            public StringField Mchc;
            public StringField Fbs;
            public StringField Ha75glucose;
            public StringField Hbf;
            public StringField HbA1C;
            public Int32Field Pbf;
            public StringField PbfAbnormal;
            public Int32Field PusCell;
            public Int32Field Cast;
            public Int32Field Albumin;
            public Int32Field Suger;
            public StringField Na;
            public StringField K;
            public StringField Hco3;
            public StringField Cl;
            public StringField Ph;
            public StringField Tsh;
            public StringField T3;
            public StringField T4;
            public StringField Ft3;
            public StringField Ft4;
            public StringField ThyroidScan;
            public StringField AntiTpoAntibody;
            public Int32Field TrAb;
            public StringField SCreatinine;
            public StringField BLoodUrea;
            public StringField UrineForAcr;
            public StringField UrineForPcr;
            public StringField SBilirubinTotal;
            public StringField SBilirubinDirect;
            public StringField SBilirubinIndirect;
            public StringField Alt;
            public StringField Ast;
            public StringField GammaGt;
            public StringField SAlkalinePhosphatase;
            public StringField ProthrombinTime;
            public StringField Inr;
            public StringField SAlbumin;
            public StringField AgRatio;
            public StringField XrayOf;
            public StringField ResultOfXray;
            public StringField File;
            public StringField CtOf;
            public StringField ResultOfCt;
            public StringField CtFile;
            public StringField MriOf;
            public StringField ResultOfMri;
            public StringField MriFile;
            public StringField UsgOf;
            public StringField ResultOfUsg;
            public StringField UsgFile;
            public Int32Field Ns1;
            public Int32Field IctOfDengue;
            public Int32Field MP;
            public StringField CorS;
            public StringField ResultOfCorS;
            public StringField Others;
            public StringField Bt;
            public StringField Ct;
            public StringField Aptt;
            public StringField AppTcontrol;
            public StringField Pt;
            public StringField PTcontrol;
            public StringField DDimer;
            public StringField Otherofcoagulation;
            public StringField Crp;
            public StringField Ana;
            public StringField AntiDsDna;
            public StringField RaFactor;
            public StringField AntiCcp;
            public StringField CAnca;
            public StringField PAnca;
            public StringField Othersofrheumatology;
            public StringField Realothers;
            public StringField addtoRealothers;




        }
    }
}
