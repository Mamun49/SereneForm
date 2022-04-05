namespace SereneForm.Admission {
    export interface GalsRow {
        GalId?: number;
        SchoberTest?: Positive;
        TestForTheSacroilicJoints?: Positive;
        CompressionTest?: Positive;
        DistractionTest?: Positive;
        TendernessOverSiJointsandMiddleOfSacrum?: Positive;
        TrendelenburgsTest?: Positive;
        LimbSortening?: Positive;
        TestForFlexingDeformity?: Positive;
        TestForAbductionorAdductionorFlexionorExtension?: Positive;
        AttituteOfJoints?: Flexed;
        Temperature?: Normal;
        Tenderness?: Positive;
        BeckersTest?: Present;
        ThePatellarTest?: Normal;
        TheBulgeTest?: Normal;
        TestForMedialandLateralCollateralLigaments?: Normal;
        TestsForAnteriorPosteriorCrucialLigaments?: Normal;
    }

    export namespace GalsRow {
        export const idProperty = 'GalId';
        export const nameProperty = 'SchoberTest';
        export const localTextPrefix = 'Admission.Gals';
        export const lookupKey = 'Default.Gals';

        export function getLookup(): Q.Lookup<GalsRow> {
            return Q.getLookup<GalsRow>('Default.Gals');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            GalId = "GalId",
            SchoberTest = "SchoberTest",
            TestForTheSacroilicJoints = "TestForTheSacroilicJoints",
            CompressionTest = "CompressionTest",
            DistractionTest = "DistractionTest",
            TendernessOverSiJointsandMiddleOfSacrum = "TendernessOverSiJointsandMiddleOfSacrum",
            TrendelenburgsTest = "TrendelenburgsTest",
            LimbSortening = "LimbSortening",
            TestForFlexingDeformity = "TestForFlexingDeformity",
            TestForAbductionorAdductionorFlexionorExtension = "TestForAbductionorAdductionorFlexionorExtension",
            AttituteOfJoints = "AttituteOfJoints",
            Temperature = "Temperature",
            Tenderness = "Tenderness",
            BeckersTest = "BeckersTest",
            ThePatellarTest = "ThePatellarTest",
            TheBulgeTest = "TheBulgeTest",
            TestForMedialandLateralCollateralLigaments = "TestForMedialandLateralCollateralLigaments",
            TestsForAnteriorPosteriorCrucialLigaments = "TestsForAnteriorPosteriorCrucialLigaments"
        }
    }
}
