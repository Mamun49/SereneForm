namespace SereneForm.Default {
    export interface UpozelaRow {
        UpozelaId?: number;
        UpozelaName?: string;
        CityId?: number;
        CityCityName?: string;
    }

    export namespace UpozelaRow {
        export const idProperty = 'UpozelaId';
        export const nameProperty = 'UpozelaName';
        export const localTextPrefix = 'Default.Upozela';
        export const lookupKey = 'Default.Upozela';

        export function getLookup(): Q.Lookup<UpozelaRow> {
            return Q.getLookup<UpozelaRow>('Default.Upozela');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            UpozelaId = "UpozelaId",
            UpozelaName = "UpozelaName",
            CityId = "CityId",
            CityCityName = "CityCityName"
        }
    }
}
