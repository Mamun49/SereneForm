using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Admission
{
    [ConnectionKey("Default"), Module("Admission"), TableName("[dbo].[Gals]")]
    [DisplayName("Gals"), InstanceName("Gals")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Gals")]
    public sealed class GalsRow : Row<GalsRow.RowFields>, IIdRow, INameRow
    {
        //[DisplayName("Gal Id"),ForeignKey("[dbo].[AddForm]", "RegId"), LeftJoin("jAddform")]
        [DisplayName("Gal Id"),Identity]
        public int? GalId
        {
            get => fields.GalId[this];
            set => fields.GalId[this] = value;
        }

        [DisplayName("Schober Test"), Size(50), QuickSearch, NameProperty]
        public Positive? SchoberTest
        {
            get => (Positive?)fields.SchoberTest[this];
            set => fields.SchoberTest[this] = (Int32?)value;
        }

        [DisplayName("Test For The Sacroilic Joints"), Column("TestforthesacroilicJoints"), Size(50)]
        public Positive? TestForTheSacroilicJoints
        {
            get => (Positive?)fields.TestForTheSacroilicJoints[this];
            set => fields.TestForTheSacroilicJoints[this] = (Int32?)value;
        }

        [DisplayName("Compression Test"), Column("CompressionTest"), Size(50)]
        public Positive? CompressionTest
        {
            get => (Positive?)fields.CompressionTest[this];
            set => fields.CompressionTest[this] = (Int32?)value;
        }

        [DisplayName("Distraction Test"), Column("DistractionTest"), Size(50)]
        public Positive? DistractionTest
        {
            get => (Positive?)fields.DistractionTest[this];
            set => fields.DistractionTest[this] = (Int32?)value;
        }

        [DisplayName("Tenderness Over Si Joints and Middle Of Sacrum"), Column("TendernessOverSIjointsandMiddleofsacrum"), Size(50)]
        public Positive? TendernessOverSiJointsandMiddleOfSacrum
        {
            get => (Positive?)fields.TendernessOverSiJointsandMiddleOfSacrum[this];
            set => fields.TendernessOverSiJointsandMiddleOfSacrum[this] = (Int32?)value;
        }

        [DisplayName("Trendelenburgs Test"), Column("TrendelenburgsTest"), Size(50)]
        public Positive? TrendelenburgsTest
        {
            get => (Positive?)fields.TrendelenburgsTest[this];
            set => fields.TrendelenburgsTest[this] = (Int32?)value;
        }

        [DisplayName("Limb Sortening"), Column("LimbSortening"), Size(50)]
        public Positive? LimbSortening
        {
            get => (Positive?)fields.LimbSortening[this];
            set => fields.LimbSortening[this] = (Int32?)value;
        }

        [DisplayName("Test For Flexing Deformity"), Column("TestForFlexingDeformity"), Size(50)]
        public Positive? TestForFlexingDeformity
        {
            get => (Positive?)fields.TestForFlexingDeformity[this];
            set => fields.TestForFlexingDeformity[this] = (Int32?)value;
        }

        [DisplayName("Test For Abduction or Adduction or Flexion or Extension"), Column("TestForAbductionorAdductionorFlexionorextension"), Size(50)]
        public Positive? TestForAbductionorAdductionorFlexionorExtension
        {
            get => (Positive?)fields.TestForAbductionorAdductionorFlexionorExtension[this];
            set => fields.TestForAbductionorAdductionorFlexionorExtension[this] = (Int32?)value;
        }

        [DisplayName("Attitute Of Joints"), Column("AttituteofJoints"), Size(50)]
        public Flexed? AttituteOfJoints
        {
            get => (Flexed?)fields.AttituteOfJoints[this];
            set => fields.AttituteOfJoints[this] = (Int32?)value;
        }

        [DisplayName("Temperature"), Size(50)]
        public Normal? Temperature
        {
            get => (Normal?)fields.Temperature[this];
            set => fields.Temperature[this] = (Int32?)value;
        }

        [DisplayName("Tenderness"), Size(50)]
        public Positive? Tenderness
        {
            get => (Positive?)fields.Tenderness[this];
            set => fields.Tenderness[this] = (Int32?)value;
        }

        [DisplayName("Beckers Test"), Column("BeckersTest"), Size(50)]
        public Present? BeckersTest
        {
            get => (Present?)fields.BeckersTest[this];
            set => fields.BeckersTest[this] = (Int32?)value;
        }

        [DisplayName("The Patellar Test"), Column("ThePatellarTest"), Size(50)]
        public Normal? ThePatellarTest
        {
            get => (Normal?)fields.ThePatellarTest[this];
            set => fields.ThePatellarTest[this] = (Int32?)value;
        }

        [DisplayName("The Bulge Test"), Column("TheBulgeTest"), Size(50)]
        public Normal? TheBulgeTest
        {
            get => (Normal?)fields.TheBulgeTest[this];
            set => fields.TheBulgeTest[this] = (Int32?)value;
        }

        [DisplayName("Test for medial and lateral collatera"), Column("Testformedialandlateralcollateralligaments"), Size(50)]
        public Normal? TestForMedialandLateralCollateralLigaments
        {
            get => (Normal?)fields.TestForMedialandLateralCollateralLigaments[this];
            set => fields.TestForMedialandLateralCollateralLigaments[this] = (Int32?)value;
        }

        [DisplayName("Tests For Anterior Posterior Crucial Ligaments"), Column("Tests for anterior posterior crucial ligaments"), Size(50)]
        public Normal? TestsForAnteriorPosteriorCrucialLigaments
        {
            get => (Normal?)fields.TestsForAnteriorPosteriorCrucialLigaments[this];
            set => fields.TestsForAnteriorPosteriorCrucialLigaments[this] = (Int32?)value;
        }

        public GalsRow()
            : base()
        {
        }

        public GalsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
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
