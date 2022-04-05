namespace SereneForm.Admission {
    export interface InvestigationForm {
        Haematology: Serenity.StringEditor;
        Hb: Serenity.StringEditor;
        Esr: Serenity.StringEditor;
        Tc: Serenity.StringEditor;
        Plt: Serenity.StringEditor;
        N: Serenity.StringEditor;
        L: Serenity.StringEditor;
        E: Serenity.StringEditor;
        Pcv: Serenity.StringEditor;
        Mch: Serenity.StringEditor;
        Mchc: Serenity.StringEditor;
        Fbs: Serenity.StringEditor;
        Ha75glucose: Serenity.StringEditor;
        Hbf: Serenity.StringEditor;
        HbA1C: Serenity.StringEditor;
        Pbf: Serenity.EnumEditor;
        PbfAbnormal: Serenity.StringEditor;
        PusCell: Serenity.LookupEditor;
        Cast: Serenity.EnumEditor;
        Albumin: Serenity.EnumEditor;
        Suger: Serenity.EnumEditor;
        Na: Serenity.StringEditor;
        K: Serenity.StringEditor;
        Hco3: Serenity.StringEditor;
        Cl: Serenity.StringEditor;
        Ph: Serenity.StringEditor;
        Tsh: Serenity.StringEditor;
        T3: Serenity.StringEditor;
        T4: Serenity.StringEditor;
        Ft3: Serenity.StringEditor;
        Ft4: Serenity.StringEditor;
        ThyroidScan: Serenity.StringEditor;
        AntiTpoAntibody: Serenity.StringEditor;
        TrAb: Serenity.EnumEditor;
        SCreatinine: Serenity.StringEditor;
        BLoodUrea: Serenity.StringEditor;
        UrineForAcr: Serenity.StringEditor;
        UrineForPcr: Serenity.StringEditor;
        SBilirubinTotal: Serenity.StringEditor;
        SBilirubinDirect: Serenity.StringEditor;
        SBilirubinIndirect: Serenity.StringEditor;
        Alt: Serenity.StringEditor;
        Ast: Serenity.StringEditor;
        GammaGt: Serenity.StringEditor;
        SAlkalinePhosphatase: Serenity.StringEditor;
        ProthrombinTime: Serenity.StringEditor;
        Inr: Serenity.StringEditor;
        SAlbumin: Serenity.StringEditor;
        AgRatio: Serenity.StringEditor;
        XrayOf: Serenity.StringEditor;
        ResultOfXray: Serenity.TextAreaEditor;
        File: Serenity.MultipleImageUploadEditor;
        CtOf: Serenity.StringEditor;
        ResultOfCt: Serenity.TextAreaEditor;
        CtFile: Serenity.MultipleImageUploadEditor;
        MriOf: Serenity.StringEditor;
        ResultOfMri: Serenity.TextAreaEditor;
        MriFile: Serenity.MultipleImageUploadEditor;
        UsgOf: Serenity.StringEditor;
        ResultOfUsg: Serenity.TextAreaEditor;
        UsgFile: Serenity.MultipleImageUploadEditor;
        Ns1: Serenity.EnumEditor;
        IctOfDengue: Serenity.EnumEditor;
        MP: Serenity.EnumEditor;
        CorS: Serenity.StringEditor;
        ResultOfCorS: Serenity.StringEditor;
        Others: Serenity.StringEditor;
        Bt: Serenity.StringEditor;
        Ct: Serenity.StringEditor;
        Aptt: Serenity.StringEditor;
        AppTcontrol: Serenity.StringEditor;
        Pt: Serenity.StringEditor;
        PTcontrol: Serenity.StringEditor;
        DDimer: Serenity.StringEditor;
        Otherofcoagulation: Serenity.StringEditor;
        Crp: Serenity.StringEditor;
        Ana: Serenity.StringEditor;
        AntiDsDna: Serenity.StringEditor;
        RaFactor: Serenity.StringEditor;
        AntiCcp: Serenity.StringEditor;
        CAnca: Serenity.StringEditor;
        PAnca: Serenity.StringEditor;
        Othersofrheumatology: Serenity.StringEditor;
        Realothers: Serenity.TextAreaEditor;
        addtoRealothers: Serenity.ImageUploadEditor;
    }

    export class InvestigationForm extends Serenity.PrefixedContext {
        static formKey = 'Admission.Investigation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvestigationForm.init)  {
                InvestigationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.LookupEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.MultipleImageUploadEditor;
                var w5 = s.ImageUploadEditor;

                Q.initFormType(InvestigationForm, [
                    'Haematology', w0,
                    'Hb', w0,
                    'Esr', w0,
                    'Tc', w0,
                    'Plt', w0,
                    'N', w0,
                    'L', w0,
                    'E', w0,
                    'Pcv', w0,
                    'Mch', w0,
                    'Mchc', w0,
                    'Fbs', w0,
                    'Ha75glucose', w0,
                    'Hbf', w0,
                    'HbA1C', w0,
                    'Pbf', w1,
                    'PbfAbnormal', w0,
                    'PusCell', w2,
                    'Cast', w1,
                    'Albumin', w1,
                    'Suger', w1,
                    'Na', w0,
                    'K', w0,
                    'Hco3', w0,
                    'Cl', w0,
                    'Ph', w0,
                    'Tsh', w0,
                    'T3', w0,
                    'T4', w0,
                    'Ft3', w0,
                    'Ft4', w0,
                    'ThyroidScan', w0,
                    'AntiTpoAntibody', w0,
                    'TrAb', w1,
                    'SCreatinine', w0,
                    'BLoodUrea', w0,
                    'UrineForAcr', w0,
                    'UrineForPcr', w0,
                    'SBilirubinTotal', w0,
                    'SBilirubinDirect', w0,
                    'SBilirubinIndirect', w0,
                    'Alt', w0,
                    'Ast', w0,
                    'GammaGt', w0,
                    'SAlkalinePhosphatase', w0,
                    'ProthrombinTime', w0,
                    'Inr', w0,
                    'SAlbumin', w0,
                    'AgRatio', w0,
                    'XrayOf', w0,
                    'ResultOfXray', w3,
                    'File', w4,
                    'CtOf', w0,
                    'ResultOfCt', w3,
                    'CtFile', w4,
                    'MriOf', w0,
                    'ResultOfMri', w3,
                    'MriFile', w4,
                    'UsgOf', w0,
                    'ResultOfUsg', w3,
                    'UsgFile', w4,
                    'Ns1', w1,
                    'IctOfDengue', w1,
                    'MP', w1,
                    'CorS', w0,
                    'ResultOfCorS', w0,
                    'Others', w0,
                    'Bt', w0,
                    'Ct', w0,
                    'Aptt', w0,
                    'AppTcontrol', w0,
                    'Pt', w0,
                    'PTcontrol', w0,
                    'DDimer', w0,
                    'Otherofcoagulation', w0,
                    'Crp', w0,
                    'Ana', w0,
                    'AntiDsDna', w0,
                    'RaFactor', w0,
                    'AntiCcp', w0,
                    'CAnca', w0,
                    'PAnca', w0,
                    'Othersofrheumatology', w0,
                    'Realothers', w3,
                    'addtoRealothers', w5
                ]);
            }
        }
    }
}
