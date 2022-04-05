using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace SereneForm.Admission.Columns
{
    [ColumnsScript("Admission.Gals")]
    [BasedOnRow(typeof(GalsRow), CheckNames = true)]
    public class GalsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int GalId { get; set; }
        [EditLink]
        public string SchoberTest { get; set; }
        public string TestForTheSacroilicJoints { get; set; }
        public string CompressionTest { get; set; }
        public string DistractionTest { get; set; }
        public string TendernessOverSiJointsandMiddleOfSacrum { get; set; }
        public string TrendelenburgsTest { get; set; }
        public string LimbSortening { get; set; }
        public string TestForFlexingDeformity { get; set; }
        public string TestForAbductionorAdductionorFlexionorExtension { get; set; }
        public string AttituteOfJoints { get; set; }
        public string Temperature { get; set; }
        public string Tenderness { get; set; }
        public string BeckersTest { get; set; }
        public string ThePatellarTest { get; set; }
        public string TheBulgeTest { get; set; }
        public string TestForMedialandLateralCollateralLigaments { get; set; }
        public string TestsForAnteriorPosteriorCrucialLigaments { get; set; }
    }
}