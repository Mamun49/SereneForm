using SereneForm.Admission.Forms;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;


namespace SereneForm.Admission
{
    [ConnectionKey("Default"), Module("Admission"), TableName("[dbo].[Admission]")]
    [DisplayName("Add Form"), InstanceName("Add Form")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    //[LookupScript("Default.Admission")]
    public sealed class AddFormRow : Row<AddFormRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Reg Id"), Identity, IdProperty]
        public int? RegId
        {
            get => fields.RegId[this];
            set => fields.RegId[this] = value;
        }

        [DisplayName("Skin"), Size(50), QuickSearch, NameProperty]
        public Normal? Skin
        {
            get => (Normal?)fields.Skin[this];
            set => fields.Skin[this] = (Int32?)value;
        }
        [DisplayName("Reason of Skin")]
        public String SkinText
        {
            get { return Fields.SkinText[this]; }
            set { Fields.SkinText[this] = value; }
        }

        [DisplayName("Nail"), Size(50)]
        public Normal? Nail
        {
            get => (Normal?)fields.Nail[this];
            set => fields.Nail[this] = (Int32?)value;
        }
        [DisplayName("Reason of Nail")]
        public String NailText
        {
            get { return Fields.NailText[this]; }
            set { Fields.NailText[this] = value; }
        }

        [DisplayName("Soft Tissue"), Column("SoftTissue"), Size(50)]
        public Normal? SoftTissue
        {
            get => (Normal?)fields.SoftTissue[this];
            set => fields.SoftTissue[this] = (Int32?)value;
        }

        [DisplayName("Rash"), Size(50)]
        public Present? Rash
        {
            get => (Present?)fields.Rash[this];
            set => fields.Rash[this] = (Int32?)value;
        }

        [DisplayName("RaynaudPhenomenon"), Column("RaynaudPhenomenon"), Size(50)]
        public Present? RaynaudPhenomenon
        {
            get => (Present?)fields.RaynaudPhenomenon[this];
            set => fields.RaynaudPhenomenon[this] = (Int32?)value;
        }

        [DisplayName("Eye"), Size(50)]
        public Normal? Eye
        {
            get => (Normal?)fields.Eye[this];
            set => fields.Eye[this] = (Int32?)value;
        }

        [DisplayName("Genitalia"), Size(50)]
        public Normal? Genitalia
        {
            get => (Normal?)fields.Genitalia[this];
            set => fields.Genitalia[this] = (Int32?)value;
        }

        [DisplayName("Nodule"), Size(50)]
        public Normal? Nodule
        {
            get => (Normal?)fields.Nodule[this];
            set => fields.Nodule[this] = (Int32?)value;
        }

        [DisplayName("Oral Ulceration"), Column("OralUlceration"), Size(50)]
        public Present? OralUlceration
        {
            get => (Present?)fields.OralUlceration[this];
            set => fields.OralUlceration[this] = (Int32?)value;
        }

        [DisplayName("Tophi"), Size(50)]
        public Present? Tophi
        {
            get => (Present?)fields.Tophi[this];
            set => fields.Tophi[this] = (Int32?)value;
        }

        [DisplayName("Lymph Nodes"), Column("LymphNodes"), Size(50)]
        public LymphNodes? LymphNodes
        {
            get => (LymphNodes?)fields.LymphNodes[this];
            set => fields.LymphNodes[this] = (Int32?) value;
        }
        [DisplayName("Gal"), ForeignKey("[dbo].[Gals]", "GalId"), LeftJoin("jGals")]
        [LookupEditor(typeof(GalsRow))]
        public int? GalId
        {
            get => fields.GalId[this];
            set => fields.GalId[this] = value;
        }
        [DisplayName("SchoberTest"), Expression("jGals.SchoberTest")]
        public Positive? SchoberTest
        {
            get => (Positive?)fields.SchoberTest[this];
            set => fields.SchoberTest[this] = (Int32?)value;
        }
        

        [DisplayName("Test For The Sacroilic Joints"), Column("TestforthesacroilicJoints"), Size(50), Expression("jGals.TestForTheSacroilicJoints")]
        public Positive? TestForTheSacroilicJoints
        {
            get => (Positive?)fields.TestForTheSacroilicJoints[this];
            set => fields.TestForTheSacroilicJoints[this] = (Int32?)value;
        }

        [DisplayName("Compression Test"), Column("CompressionTest"), Size(50),Expression("jGals.CompressionTest")]
        public Positive? CompressionTest
        {
            get => (Positive?)fields.CompressionTest[this];
            set => fields.CompressionTest[this] = (Int32?)value;
        }

        [DisplayName("Distraction Test"), Column("DistractionTest"), Size(50),/*Expression("DistractionTest")*/]
        public Positive? DistractionTest
        {
            get => (Positive?)fields.DistractionTest[this];
            set => fields.DistractionTest[this] = (Int32?)value;
        }

        [DisplayName("Tenderness Over Si Joints and Middle Of Sacrum"), Column("TendernessOverSIjointsandMiddleofsacrum"), Size(50), /*Expression("TendernessOverSiJointsandMiddleOfSacrum")*/]
        public Positive? TendernessOverSiJointsandMiddleOfSacrum
        {
            get => (Positive?)fields.TendernessOverSiJointsandMiddleOfSacrum[this];
            set => fields.TendernessOverSiJointsandMiddleOfSacrum[this] = (Int32?)value;
        }

        [DisplayName("Trendelenburgs Test"), Column("TrendelenburgsTest"), Size(50), /*Expression("TrendelenburgsTest")*/]
        public Positive? TrendelenburgsTest
        {
            get => (Positive?)fields.TrendelenburgsTest[this];
            set => fields.TrendelenburgsTest[this] = (Int32?)value;
        }

        [DisplayName("Limb Sortening"), Column("LimbSortening"), Size(50), /*Expression("LimbSortening")*/]
        public Positive? LimbSortening
        {
            get => (Positive?)fields.LimbSortening[this];
            set => fields.LimbSortening[this] = (Int32?)value;
        }

        [DisplayName("Test For Flexing Deformity"), Column("Testforflexingdeformity"), Size(50), /*Expression("TestForFlexingDeformity")*/]
        public Positive? TestForFlexingDeformity
        {
            get => (Positive?)fields.TestForFlexingDeformity[this];
            set => fields.TestForFlexingDeformity[this] = (Int32?)value;
        }

        [DisplayName("Test For Abduction or Adduction or Flexion or Extension"), Column("TestforAbductionoradductionorflexionorextension"), Size(50), /*Expression("TestForAbductionorAdductionorFlexionorExtension")*/]
        public Positive? TestForAbductionorAdductionorFlexionorExtension
        {
            get => (Positive?)fields.TestForAbductionorAdductionorFlexionorExtension[this];
            set => fields.TestForAbductionorAdductionorFlexionorExtension[this] = (Int32?)value;
        }

        [DisplayName("Attitute Of Joints"), Column("AttituteofJoints"), Size(50), /*Expression("AttituteOfJoints")*/]
        public Flexed? AttituteOfJoints
        {
            get => (Flexed?)fields.AttituteOfJoints[this];
            set => fields.AttituteOfJoints[this] = (Int32?)value;
        }

        [DisplayName("Temperature"), Size(50), /*Expression("Temperature")*/]
        public Normal? Temperature
        {
            get => (Normal?)fields.Temperature[this];
            set => fields.Temperature[this] = (Int32?)value;
        }

        [DisplayName("Tenderness"), Size(50), /*Expression("Tenderness")*/]
        public Positive? Tenderness
        {
            get => (Positive?)fields.Tenderness[this];
            set => fields.Tenderness[this] = (Int32?)value;
        }

        [DisplayName("Beckers Test"), Column("BeckersTest"), Size(50), /*Expression("BeckersTest")*/]
        public Present? BeckersTest
        {
            get => (Present?)fields.BeckersTest[this];
            set => fields.BeckersTest[this] = (Int32?)value;
        }

        [DisplayName("The Patellar Test"), Column("ThePatellarTest"), Size(50), /*Expression("ThePatellarTest")*/]
        public Normal? ThePatellarTest
        {
            get => (Normal?)fields.ThePatellarTest[this];
            set => fields.ThePatellarTest[this] = (Int32?)value;
        }

        [DisplayName("The Bulge Test"), Column("TheBulgeTest"), Size(50), /*Expression("TheBulgeTest")*/]
        public Normal? TheBulgeTest
        {
            get => (Normal?)fields.TheBulgeTest[this];
            set => fields.TheBulgeTest[this] = (Int32?)value;
        }

        [DisplayName("Test for medial and lateral collatera"), Column("Testformedialandlateralcollateralligaments"), Size(50), /*Expression("TestForMedialandLateralCollateralLigaments")*/]
        public Normal? TestForMedialandLateralCollateralLigaments
        {
            get => (Normal?)fields.TestForMedialandLateralCollateralLigaments[this];
            set => fields.TestForMedialandLateralCollateralLigaments[this] = (Int32?)value;
        }

        [DisplayName("Tests For Anterior Posterior Crucial Ligaments"), Column("Testsforanteriorposteriorcrucialligaments"), Size(50), /*Expression("TestsForAnteriorPosteriorCrucialLigaments")*/]
        public Normal? TestsForAnteriorPosteriorCrucialLigaments
        {
            get => (Normal?)fields.TestsForAnteriorPosteriorCrucialLigaments[this];
            set => fields.TestsForAnteriorPosteriorCrucialLigaments[this] = (Int32?)value;
        }
        public AddFormRow()
            : base()
        {
        }

        public AddFormRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RegId;
            public Int32Field Skin;
            public StringField SkinText;
            public Int32Field Nail;
            public StringField NailText;    
            public Int32Field SoftTissue;
            public Int32Field Rash;
            public Int32Field RaynaudPhenomenon;
            public Int32Field Eye;
            public Int32Field Genitalia;
            public Int32Field Nodule;
            public Int32Field OralUlceration;
            public Int32Field Tophi;
            public Int32Field LymphNodes;
            public Int32Field GalId;
            public Int32Field SchoberTest;
            public Int32Field TestForTheSacroilicJoints;
            public Int32Field CompressionTest;
            public Int32Field DistractionTest;
            public Int32Field TendernessOverSiJointsandMiddleOfSacrum;
            public Int32Field TrendelenburgsTest;
            public Int32Field LimbSortening;
            public Int32Field TestForFlexingDeformity;
            public Int32Field TestForAbductionorAdductionorFlexionorExtension;
            public Int32Field AttituteOfJoints;
            public Int32Field Temperature;
            public Int32Field Tenderness;
            public Int32Field BeckersTest;
            public Int32Field ThePatellarTest;
            public Int32Field TheBulgeTest;
            public Int32Field TestForMedialandLateralCollateralLigaments;
            public Int32Field TestsForAnteriorPosteriorCrucialLigaments;
              
            
        }
    }
}
