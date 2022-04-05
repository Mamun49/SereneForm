namespace SereneForm.Admission {
    export interface AddFormForm {
        Skin: Serenity.EnumEditor;
        SkinText: Serenity.StringEditor;
        Nail: Serenity.EnumEditor;
        NailText: Serenity.StringEditor;
        SoftTissue: Serenity.EnumEditor;
        Rash: Serenity.EnumEditor;
        RaynaudPhenomenon: Serenity.EnumEditor;
        Eye: Serenity.EnumEditor;
        Genitalia: Serenity.EnumEditor;
        Nodule: Serenity.EnumEditor;
        OralUlceration: Serenity.EnumEditor;
        Tophi: Serenity.EnumEditor;
        LymphNodes: Serenity.EnumEditor;
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

    export class AddFormForm extends Serenity.PrefixedContext {
        static formKey = 'Admission.AddForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddFormForm.init)  {
                AddFormForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;

                Q.initFormType(AddFormForm, [
                    'Skin', w0,
                    'SkinText', w1,
                    'Nail', w0,
                    'NailText', w1,
                    'SoftTissue', w0,
                    'Rash', w0,
                    'RaynaudPhenomenon', w0,
                    'Eye', w0,
                    'Genitalia', w0,
                    'Nodule', w0,
                    'OralUlceration', w0,
                    'Tophi', w0,
                    'LymphNodes', w0,
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
