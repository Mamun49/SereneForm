using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Forms
{
    [FormScript("Admission.AddForm")]
    
    [BasedOnRow(typeof(AddFormRow), CheckNames = true)]
    public class AddFormForm
    {
        [Category("General Examination")]
        [OneThirdWidth]
        public Int32Field Skin { get; set; }
        [OneThirdWidth]
        public String SkinText { get; set; }
        [OneThirdWidth]
        public Int32Field Nail { get; set; }
        [OneThirdWidth]
        public String NailText { get; set; }
        [OneThirdWidth]
        public Int32Field SoftTissue { get; set; }
        [OneThirdWidth]
        public Int32Field Rash { get; set; }
        [OneThirdWidth]
        public Int32Field RaynaudPhenomenon { get; set; }
        [OneThirdWidth]
        public Int32Field Eye { get; set; }
        [OneThirdWidth]
        public Int32Field Genitalia { get; set; }
        [OneThirdWidth]
        public Int32Field Nodule { get; set; }
        [OneThirdWidth]
        public Int32Field OralUlceration { get; set; }
        [OneThirdWidth]
        public Int32Field Tophi { get; set; }
        [OneThirdWidth]
        public Int32Field LymphNodes { get; set; }

        [Category("Gals Screening")]
        [OneThirdWidth]

        public Int32Field SchoberTest { get; set; }
        [OneThirdWidth]
        public Int32Field TestForTheSacroilicJoints { get; set; }
        [OneThirdWidth]
        public Int32Field CompressionTest { get; set; }
        [OneThirdWidth]
        public Int32Field DistractionTest { get; set; }
        [OneThirdWidth]
        public Int32Field TendernessOverSiJointsandMiddleOfSacrum { get; set; }
        [OneThirdWidth]
        public Int32Field TrendelenburgsTest { get; set; }
        [OneThirdWidth]
        public Int32Field LimbSortening { get; set; }
        [OneThirdWidth]
        public Int32Field TestForFlexingDeformity { get; set; }
        [OneThirdWidth]
        public Int32Field TestForAbductionorAdductionorFlexionorExtension { get; set; }
        [OneThirdWidth]
        public Int32Field AttituteOfJoints { get; set; }
        [OneThirdWidth]
        public Int32Field Temperature { get; set; }
        [OneThirdWidth]
        public Int32Field Tenderness { get; set; }
        [OneThirdWidth]
        public Int32Field BeckersTest { get; set; }
        [OneThirdWidth]
        public Int32Field ThePatellarTest { get; set; }
        [OneThirdWidth]
        public Int32Field TheBulgeTest { get; set; }
        [OneThirdWidth]
        public Int32Field TestForMedialandLateralCollateralLigaments { get; set; }
        [OneThirdWidth]
        public Int32Field TestsForAnteriorPosteriorCrucialLigaments { get; set; }
    }
}