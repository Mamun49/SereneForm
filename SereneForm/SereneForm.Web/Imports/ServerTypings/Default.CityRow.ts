namespace SereneForm.Default {
    export interface CityRow {
        CityId?: number;
        CityName?: string;
        CountryId?: number;
        CountryCountryName?: string;
    }

    export namespace CityRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'CityName';
        export const localTextPrefix = 'Default.City';
        export const lookupKey = 'Default.City';

        export function getLookup(): Q.Lookup<CityRow> {
            return Q.getLookup<CityRow>('Default.City');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CityId = "CityId",
            CityName = "CityName",
            CountryId = "CountryId",
            CountryCountryName = "CountryCountryName"
        }
    }
}
