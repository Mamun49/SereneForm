namespace SereneForm.Admission {
    export interface FollowUpRow {
        FollId?: number;
        Subjective?: string;
        Pulse?: string;
        Bp?: string;
        Temp?: string;
        Rr?: string;
        Urineoutput?: string;
        SpO2?: string;
        ObjectiveOther?: string;
        Condition?: conditionenum;
        Newdiagnosis?: string;
        Investigation?: string;
        Consultation?: string;
        Discharge?: dischargeenum;
    }

    export namespace FollowUpRow {
        export const idProperty = 'FollId';
        export const nameProperty = 'Subjective';
        export const localTextPrefix = 'Admission.FollowUp';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            FollId = "FollId",
            Subjective = "Subjective",
            Pulse = "Pulse",
            Bp = "Bp",
            Temp = "Temp",
            Rr = "Rr",
            Urineoutput = "Urineoutput",
            SpO2 = "SpO2",
            ObjectiveOther = "ObjectiveOther",
            Condition = "Condition",
            Newdiagnosis = "Newdiagnosis",
            Investigation = "Investigation",
            Consultation = "Consultation",
            Discharge = "Discharge"
        }
    }
}
