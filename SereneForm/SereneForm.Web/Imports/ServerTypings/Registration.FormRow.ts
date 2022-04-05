namespace SereneForm.Registration {
    export interface FormRow {
        RegId?: number;
        Name?: string;
        Mail?: string;
        Address?: string;
        MobileNumber?: number;
        Dob?: string;
        CityId?: number;
        CountryId?: number;
        UpozelaId?: number;
    }

    export namespace FormRow {
        export const idProperty = 'RegId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Registration.Form';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            RegId = "RegId",
            Name = "Name",
            Mail = "Mail",
            Address = "Address",
            MobileNumber = "MobileNumber",
            Dob = "Dob",
            CityId = "CityId",
            CountryId = "CountryId",
            UpozelaId = "UpozelaId"
        }
    }
}
