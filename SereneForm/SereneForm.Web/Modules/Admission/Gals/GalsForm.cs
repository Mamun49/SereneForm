using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Forms
{
    [FormScript("Admission.Gals")]
    [BasedOnRow(typeof(GalsRow), CheckNames = true)]
    
    public class GalsForm
    {
        public Int32Field SchoberTest { get; set; }
        public Int32Field TestForTheSacroilicJoints { get; set; }
        public Int32Field CompressionTest { get; set; }
        public Int32Field DistractionTest { get; set; }
        public Int32Field TendernessOverSiJointsandMiddleOfSacrum { get; set; }
        public Int32Field TrendelenburgsTest { get; set; }
        public Int32Field LimbSortening { get; set; }
        public Int32Field TestForFlexingDeformity { get; set; }
        public Int32Field TestForAbductionorAdductionorFlexionorExtension { get; set; }
        public Int32Field AttituteOfJoints { get; set; }
        public Int32Field Temperature { get; set; }
        public Int32Field Tenderness { get; set; }
        public Int32Field BeckersTest { get; set; }
        public Int32Field ThePatellarTest { get; set; }
        public Int32Field TheBulgeTest { get; set; }
        public Int32Field TestForMedialandLateralCollateralLigaments { get; set; }
        public Int32Field TestsForAnteriorPosteriorCrucialLigaments { get; set; }
    }
}