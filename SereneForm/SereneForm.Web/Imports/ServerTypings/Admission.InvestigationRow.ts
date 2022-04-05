namespace SereneForm.Admission {
    export interface InvestigationRow {
        InvId?: number;
        Haematology?: string;
        Hb?: string;
        Esr?: string;
        Tc?: string;
        Plt?: string;
        N?: string;
        L?: string;
        E?: string;
        Pcv?: string;
        Mch?: string;
        Mchc?: string;
        Fbs?: string;
        Ha75glucose?: string;
        Hbf?: string;
        HbA1C?: string;
        Pbf?: pbfNormal;
        PbfAbnormal?: string;
        PusCell?: pus;
        Cast?: cast;
        Albumin?: albumin;
        Suger?: albumin;
        Na?: string;
        K?: string;
        Hco3?: string;
        Cl?: string;
        Ph?: string;
        Tsh?: string;
        T3?: string;
        T4?: string;
        Ft3?: string;
        Ft4?: string;
        ThyroidScan?: string;
        AntiTpoAntibody?: string;
        TrAb?: trpresent;
        SCreatinine?: string;
        BLoodUrea?: string;
        UrineForAcr?: string;
        UrineForPcr?: string;
        SBilirubinTotal?: string;
        SBilirubinDirect?: string;
        SBilirubinIndirect?: string;
        Alt?: string;
        Ast?: string;
        GammaGt?: string;
        SAlkalinePhosphatase?: string;
        ProthrombinTime?: string;
        Inr?: string;
        SAlbumin?: string;
        AgRatio?: string;
        XrayOf?: string;
        ResultOfXray?: string;
        File?: string;
        CtOf?: string;
        ResultOfCt?: string;
        CtFile?: string;
        MriOf?: string;
        ResultOfMri?: string;
        MriFile?: string;
        UsgOf?: string;
        ResultOfUsg?: string;
        UsgFile?: string;
        Ns1?: ns1enum;
        IctOfDengue?: ictdengue;
        MP?: mpenum;
        CorS?: string;
        ResultOfCorS?: string;
        Others?: string;
        Bt?: string;
        Ct?: string;
        Aptt?: string;
        AppTcontrol?: string;
        Pt?: string;
        PTcontrol?: string;
        DDimer?: string;
        Otherofcoagulation?: string;
        Crp?: string;
        Ana?: string;
        AntiDsDna?: string;
        RaFactor?: string;
        AntiCcp?: string;
        CAnca?: string;
        PAnca?: string;
        Othersofrheumatology?: string;
        Realothers?: string;
        addtoRealothers?: string;
    }

    export namespace InvestigationRow {
        export const idProperty = 'InvId';
        export const nameProperty = 'Haematology';
        export const localTextPrefix = 'Admission.Investigation';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            InvId = "InvId",
            Haematology = "Haematology",
            Hb = "Hb",
            Esr = "Esr",
            Tc = "Tc",
            Plt = "Plt",
            N = "N",
            L = "L",
            E = "E",
            Pcv = "Pcv",
            Mch = "Mch",
            Mchc = "Mchc",
            Fbs = "Fbs",
            Ha75glucose = "Ha75glucose",
            Hbf = "Hbf",
            HbA1C = "HbA1C",
            Pbf = "Pbf",
            PbfAbnormal = "PbfAbnormal",
            PusCell = "PusCell",
            Cast = "Cast",
            Albumin = "Albumin",
            Suger = "Suger",
            Na = "Na",
            K = "K",
            Hco3 = "Hco3",
            Cl = "Cl",
            Ph = "Ph",
            Tsh = "Tsh",
            T3 = "T3",
            T4 = "T4",
            Ft3 = "Ft3",
            Ft4 = "Ft4",
            ThyroidScan = "ThyroidScan",
            AntiTpoAntibody = "AntiTpoAntibody",
            TrAb = "TrAb",
            SCreatinine = "SCreatinine",
            BLoodUrea = "BLoodUrea",
            UrineForAcr = "UrineForAcr",
            UrineForPcr = "UrineForPcr",
            SBilirubinTotal = "SBilirubinTotal",
            SBilirubinDirect = "SBilirubinDirect",
            SBilirubinIndirect = "SBilirubinIndirect",
            Alt = "Alt",
            Ast = "Ast",
            GammaGt = "GammaGt",
            SAlkalinePhosphatase = "SAlkalinePhosphatase",
            ProthrombinTime = "ProthrombinTime",
            Inr = "Inr",
            SAlbumin = "SAlbumin",
            AgRatio = "AgRatio",
            XrayOf = "XrayOf",
            ResultOfXray = "ResultOfXray",
            File = "File",
            CtOf = "CtOf",
            ResultOfCt = "ResultOfCt",
            CtFile = "CtFile",
            MriOf = "MriOf",
            ResultOfMri = "ResultOfMri",
            MriFile = "MriFile",
            UsgOf = "UsgOf",
            ResultOfUsg = "ResultOfUsg",
            UsgFile = "UsgFile",
            Ns1 = "Ns1",
            IctOfDengue = "IctOfDengue",
            MP = "MP",
            CorS = "CorS",
            ResultOfCorS = "ResultOfCorS",
            Others = "Others",
            Bt = "Bt",
            Ct = "Ct",
            Aptt = "Aptt",
            AppTcontrol = "AppTcontrol",
            Pt = "Pt",
            PTcontrol = "PTcontrol",
            DDimer = "DDimer",
            Otherofcoagulation = "Otherofcoagulation",
            Crp = "Crp",
            Ana = "Ana",
            AntiDsDna = "AntiDsDna",
            RaFactor = "RaFactor",
            AntiCcp = "AntiCcp",
            CAnca = "CAnca",
            PAnca = "PAnca",
            Othersofrheumatology = "Othersofrheumatology",
            Realothers = "Realothers",
            addtoRealothers = "addtoRealothers"
        }
    }
}
