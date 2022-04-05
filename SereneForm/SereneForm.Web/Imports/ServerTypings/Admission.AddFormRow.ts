namespace SereneForm.Admission {
    export interface AddFormRow {
        RegId?: number;
        Skin?: Normal;
        SkinText?: string;
        Nail?: Normal;
        NailText?: string;
        SoftTissue?: Normal;
        Rash?: Present;
        RaynaudPhenomenon?: Present;
        Eye?: Normal;
        Genitalia?: Normal;
        Nodule?: Normal;
        OralUlceration?: Present;
        Tophi?: Present;
        LymphNodes?: LymphNodes;
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

    export namespace AddFormRow {
        export const idProperty = 'RegId';
        export const nameProperty = 'Skin';
        export const localTextPrefix = 'Admission.AddForm';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            RegId = "RegId",
            Skin = "Skin",
            SkinText = "SkinText",
            Nail = "Nail",
            NailText = "NailText",
            SoftTissue = "SoftTissue",
            Rash = "Rash",
            RaynaudPhenomenon = "RaynaudPhenomenon",
            Eye = "Eye",
            Genitalia = "Genitalia",
            Nodule = "Nodule",
            OralUlceration = "OralUlceration",
            Tophi = "Tophi",
            LymphNodes = "LymphNodes",
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
