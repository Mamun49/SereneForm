namespace SereneForm.Admission {
    export interface GalsForm {
        SchoberTest: Serenity.EnumEditor;
        TestForTheSacroilicJoints: Serenity.EnumEditor;
        CompressionTest: Serenity.EnumEditor;
        DistractionTest: Serenity.EnumEditor;
        TendernessOverSiJointsandMiddleOfSacrum: Serenity.EnumEditor;
        TrendelenburgsTest: Serenity.EnumEditor;
        LimbSortening: Serenity.EnumEditor;
        TestForFlexingDeformity: Serenity.EnumEditor;
        TestForAbductionorAdductionorFlexionorExtension: Serenity.EnumEditor;
        AttituteOfJoints: Serenity.EnumEditor;
        Temperature: Serenity.EnumEditor;
        Tenderness: Serenity.EnumEditor;
        BeckersTest: Serenity.EnumEditor;
        ThePatellarTest: Serenity.EnumEditor;
        TheBulgeTest: Serenity.EnumEditor;
        TestForMedialandLateralCollateralLigaments: Serenity.EnumEditor;
        TestsForAnteriorPosteriorCrucialLigaments: Serenity.EnumEditor;
    }

    export class GalsForm extends Serenity.PrefixedContext {
        static formKey = 'Admission.Gals';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!GalsForm.init)  {
                GalsForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;

                Q.initFormType(GalsForm, [
                    'SchoberTest', w0,
                    'TestForTheSacroilicJoints', w0,
                    'CompressionTest', w0,
                    'DistractionTest', w0,
                    'TendernessOverSiJointsandMiddleOfSacrum', w0,
                    'TrendelenburgsTest', w0,
                    'LimbSortening', w0,
                    'TestForFlexingDeformity', w0,
                    'TestForAbductionorAdductionorFlexionorExtension', w0,
                    'AttituteOfJoints', w0,
                    'Temperature', w0,
                    'Tenderness', w0,
                    'BeckersTest', w0,
                    'ThePatellarTest', w0,
                    'TheBulgeTest', w0,
                    'TestForMedialandLateralCollateralLigaments', w0,
                    'TestsForAnteriorPosteriorCrucialLigaments', w0
                ]);
            }
        }
    }
}
