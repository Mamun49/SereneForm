namespace SereneForm.Default {
    export interface PusCellRow {
        PuscellId?: number;
        HpmData?: string;
    }

    export namespace PusCellRow {
        export const idProperty = 'PuscellId';
        export const nameProperty = 'HpmData';
        export const localTextPrefix = 'Default.PusCell';
        export const lookupKey = 'Default.PusCell';

        export function getLookup(): Q.Lookup<PusCellRow> {
            return Q.getLookup<PusCellRow>('Default.PusCell');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PuscellId = "PuscellId",
            HpmData = "HpmData"
        }
    }
}
