namespace SereneForm.Default {
    export interface RealOthersRow {
        OtherId?: number;
        InvestOthers?: string;
    }

    export namespace RealOthersRow {
        export const idProperty = 'OtherId';
        export const nameProperty = 'InvestOthers';
        export const localTextPrefix = 'Default.RealOthers';
        export const lookupKey = 'Default.RealOthers';

        export function getLookup(): Q.Lookup<RealOthersRow> {
            return Q.getLookup<RealOthersRow>('Default.RealOthers');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            OtherId = "OtherId",
            InvestOthers = "InvestOthers"
        }
    }
}
