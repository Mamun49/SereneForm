/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace SereneForm.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
    }
}
declare namespace SereneForm.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SereneForm.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SereneForm.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SereneForm.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SereneForm.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SereneForm.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SereneForm.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SereneForm.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SereneForm.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SereneForm.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SereneForm.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SereneForm.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SereneForm.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SereneForm.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SereneForm.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SereneForm.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SereneForm.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SereneForm.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SereneForm.Admission {
    class AddFormColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Admission {
    interface AddFormForm {
        Skin: Serenity.EnumEditor;
        SkinText: Serenity.StringEditor;
        Nail: Serenity.EnumEditor;
        NailText: Serenity.StringEditor;
        SoftTissue: Serenity.EnumEditor;
        Rash: Serenity.EnumEditor;
        RaynaudPhenomenon: Serenity.EnumEditor;
        Eye: Serenity.EnumEditor;
        Genitalia: Serenity.EnumEditor;
        Nodule: Serenity.EnumEditor;
        OralUlceration: Serenity.EnumEditor;
        Tophi: Serenity.EnumEditor;
        LymphNodes: Serenity.EnumEditor;
        SchoberTest: Serenity.EnumEditor;
        TestForTheSacroilicJoints: Serenity.EnumEditor;
        CompressionTest: Serenity.EnumEditor;
        DistractionTest: Serenity.EnumEditor;
        TendernessOverSiJointsandMiddleOfSacrum: Serenity.EnumEditor;
        TrendelenburgsTest: Serenity.EnumEditor;
        LimbSortening: Serenity.EnumEditor;
        TestForFlexingDeformity: Serenity.EnumEditor;
        TestForAbductionorAdductionorFlexionorExtension: Serenity.EnumEditor;
        AttituteOfJoints: Serenity.EnumEditor;
        Temperature: Serenity.EnumEditor;
        Tenderness: Serenity.EnumEditor;
        BeckersTest: Serenity.EnumEditor;
        ThePatellarTest: Serenity.EnumEditor;
        TheBulgeTest: Serenity.EnumEditor;
        TestForMedialandLateralCollateralLigaments: Serenity.EnumEditor;
        TestsForAnteriorPosteriorCrucialLigaments: Serenity.EnumEditor;
    }
    class AddFormForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Admission {
    interface AddFormRow {
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
    namespace AddFormRow {
        const idProperty = "RegId";
        const nameProperty = "Skin";
        const localTextPrefix = "Admission.AddForm";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SereneForm.Admission {
    namespace AddFormService {
        const baseUrl = "Admission/AddForm";
        function Create(request: Serenity.SaveRequest<AddFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AddFormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddFormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Admission/AddForm/Create",
            Update = "Admission/AddForm/Update",
            Delete = "Admission/AddForm/Delete",
            Retrieve = "Admission/AddForm/Retrieve",
            List = "Admission/AddForm/List"
        }
    }
}
declare namespace SereneForm.Admission {
    enum Flexed {
        Normal = 1,
        Flexed = 2
    }
}
declare namespace SereneForm.Admission {
    class FollowUpColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Admission {
    interface FollowUpForm {
        Subjective: Serenity.TextAreaEditor;
        Pulse: Serenity.StringEditor;
        Bp: Serenity.StringEditor;
        Temp: Serenity.StringEditor;
        Rr: Serenity.StringEditor;
        Urineoutput: Serenity.StringEditor;
        SpO2: Serenity.StringEditor;
        ObjectiveOther: Serenity.TextAreaEditor;
        Condition: Serenity.EnumEditor;
        Newdiagnosis: Serenity.StringEditor;
        Investigation: Serenity.TextAreaEditor;
        Consultation: Serenity.TextAreaEditor;
        Discharge: Serenity.EnumEditor;
    }
    class FollowUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Admission {
    interface FollowUpRow {
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
    namespace FollowUpRow {
        const idProperty = "FollId";
        const nameProperty = "Subjective";
        const localTextPrefix = "Admission.FollowUp";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SereneForm.Admission {
    namespace FollowUpService {
        const baseUrl = "Admission/FollowUp";
        function Create(request: Serenity.SaveRequest<FollowUpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FollowUpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FollowUpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FollowUpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Admission/FollowUp/Create",
            Update = "Admission/FollowUp/Update",
            Delete = "Admission/FollowUp/Delete",
            Retrieve = "Admission/FollowUp/Retrieve",
            List = "Admission/FollowUp/List"
        }
    }
}
declare namespace SereneForm.Admission {
    class GalsColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Admission {
    interface GalsForm {
        SchoberTest: Serenity.EnumEditor;
        TestForTheSacroilicJoints: Serenity.EnumEditor;
        CompressionTest: Serenity.EnumEditor;
        DistractionTest: Serenity.EnumEditor;
        TendernessOverSiJointsandMiddleOfSacrum: Serenity.EnumEditor;
        TrendelenburgsTest: Serenity.EnumEditor;
        LimbSortening: Serenity.EnumEditor;
        TestForFlexingDeformity: Serenity.EnumEditor;
        TestForAbductionorAdductionorFlexionorExtension: Serenity.EnumEditor;
        AttituteOfJoints: Serenity.EnumEditor;
        Temperature: Serenity.EnumEditor;
        Tenderness: Serenity.EnumEditor;
        BeckersTest: Serenity.EnumEditor;
        ThePatellarTest: Serenity.EnumEditor;
        TheBulgeTest: Serenity.EnumEditor;
        TestForMedialandLateralCollateralLigaments: Serenity.EnumEditor;
        TestsForAnteriorPosteriorCrucialLigaments: Serenity.EnumEditor;
    }
    class GalsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Admission {
    interface GalsRow {
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
    namespace GalsRow {
        const idProperty = "GalId";
        const nameProperty = "SchoberTest";
        const localTextPrefix = "Admission.Gals";
        const lookupKey = "Default.Gals";
        function getLookup(): Q.Lookup<GalsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SereneForm.Admission {
    namespace GalsService {
        const baseUrl = "Admission/Gals";
        function Create(request: Serenity.SaveRequest<GalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Admission/Gals/Create",
            Update = "Admission/Gals/Update",
            Delete = "Admission/Gals/Delete",
            Retrieve = "Admission/Gals/Retrieve",
            List = "Admission/Gals/List"
        }
    }
}
declare namespace SereneForm.Admission {
    class InvestigationColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Admission {
    interface InvestigationForm {
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
    class InvestigationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Admission {
    interface InvestigationRow {
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
    namespace InvestigationRow {
        const idProperty = "InvId";
        const nameProperty = "Haematology";
        const localTextPrefix = "Admission.Investigation";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SereneForm.Admission {
    namespace InvestigationService {
        const baseUrl = "Admission/Investigation";
        function Create(request: Serenity.SaveRequest<InvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvestigationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvestigationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Admission/Investigation/Create",
            Update = "Admission/Investigation/Update",
            Delete = "Admission/Investigation/Delete",
            Retrieve = "Admission/Investigation/Retrieve",
            List = "Admission/Investigation/List"
        }
    }
}
declare namespace SereneForm.Admission {
    enum LymphNodes {
        Palpable = 1,
        NP = 2
    }
}
declare namespace SereneForm.Admission {
    enum Normal {
        Normal = 1,
        Abnormal = 2
    }
}
declare namespace SereneForm.Admission {
    enum Positive {
        Positive = 1,
        Negative = 2
    }
}
declare namespace SereneForm.Admission {
    enum Present {
        Present = 1,
        Absent = 2
    }
}
declare namespace SereneForm.Admission {
    enum albumin {
        absent = 1,
        trace = 2,
        plus = 3,
        plus2 = 4,
        plus3 = 5,
        plus4 = 6
    }
}
declare namespace SereneForm.Admission {
    enum cast {
        None = 1,
        hyaline = 2,
        cellular = 3,
        RBC = 4,
        Others = 5
    }
}
declare namespace SereneForm.Admission {
    enum conditionenum {
        Improved = 1,
        Deteriorated = 2,
        Static = 3
    }
}
declare namespace SereneForm.Admission {
    enum dischargeenum {
        DwithA = 1,
        DOR = 2,
        DORB = 3,
        Refertootherward = 4,
        Other = 5
    }
}
declare namespace SereneForm.Admission {
    enum ictdengue {
        Negative = 1,
        PositiveIgG = 2,
        PositiveIgM = 3,
        PositiveBothIgGandIgM = 4,
        NotDone = 5
    }
}
declare namespace SereneForm.Admission {
    enum mpenum {
        Positive = 1,
        Negative = 2
    }
}
declare namespace SereneForm.Admission {
    enum ns1enum {
        Positive = 1,
        Negative = 2,
        NotDone = 3
    }
}
declare namespace SereneForm.Admission {
    enum pbfNormal {
        Normal = 1,
        Abnormal = 2
    }
}
declare namespace SereneForm.Admission {
    enum pus {
        NILL = 1,
        HPF = 2,
        Plenty = 3
    }
}
declare namespace SereneForm.Admission {
    enum trpresent {
        Present = 1,
        Absent = 2
    }
}
declare namespace SereneForm.Default {
    class CityColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Default {
    interface CityForm {
        CityName: Serenity.StringEditor;
        CountryId: Serenity.LookupEditor;
    }
    class CityForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Default {
    interface CityRow {
        CityId?: number;
        CityName?: string;
        CountryId?: number;
        CountryCountryName?: string;
    }
    namespace CityRow {
        const idProperty = "CityId";
        const nameProperty = "CityName";
        const localTextPrefix = "Default.City";
        const lookupKey = "Default.City";
        function getLookup(): Q.Lookup<CityRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CityId = "CityId",
            CityName = "CityName",
            CountryId = "CountryId",
            CountryCountryName = "CountryCountryName"
        }
    }
}
declare namespace SereneForm.Default {
    namespace CityService {
        const baseUrl = "Default/City";
        function Create(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/City/Create",
            Update = "Default/City/Update",
            Delete = "Default/City/Delete",
            Retrieve = "Default/City/Retrieve",
            List = "Default/City/List"
        }
    }
}
declare namespace SereneForm.Default {
    class CountryColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Default {
    interface CountryForm {
        CountryName: Serenity.StringEditor;
    }
    class CountryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Default {
    interface CountryRow {
        CountryId?: number;
        CountryName?: string;
    }
    namespace CountryRow {
        const idProperty = "CountryId";
        const nameProperty = "CountryName";
        const localTextPrefix = "Default.Country";
        const lookupKey = "Default.Country";
        function getLookup(): Q.Lookup<CountryRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CountryId = "CountryId",
            CountryName = "CountryName"
        }
    }
}
declare namespace SereneForm.Default {
    namespace CountryService {
        const baseUrl = "Default/Country";
        function Create(request: Serenity.SaveRequest<CountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Country/Create",
            Update = "Default/Country/Update",
            Delete = "Default/Country/Delete",
            Retrieve = "Default/Country/Retrieve",
            List = "Default/Country/List"
        }
    }
}
declare namespace SereneForm.Default {
    class UpozelaColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Default {
    interface UpozelaForm {
        UpozelaId: Serenity.IntegerEditor;
        UpozelaName: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
    }
    class UpozelaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Default {
    interface UpozelaRow {
        UpozelaId?: number;
        UpozelaName?: string;
        CityId?: number;
        CityCityName?: string;
    }
    namespace UpozelaRow {
        const idProperty = "UpozelaId";
        const nameProperty = "UpozelaName";
        const localTextPrefix = "Default.Upozela";
        const lookupKey = "Default.Upozela";
        function getLookup(): Q.Lookup<UpozelaRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            UpozelaId = "UpozelaId",
            UpozelaName = "UpozelaName",
            CityId = "CityId",
            CityCityName = "CityCityName"
        }
    }
}
declare namespace SereneForm.Default {
    namespace UpozelaService {
        const baseUrl = "Default/Upozela";
        function Create(request: Serenity.SaveRequest<UpozelaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UpozelaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UpozelaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UpozelaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Upozela/Create",
            Update = "Default/Upozela/Update",
            Delete = "Default/Upozela/Delete",
            Retrieve = "Default/Upozela/Retrieve",
            List = "Default/Upozela/List"
        }
    }
}
declare namespace SereneForm.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SereneForm.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SereneForm.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SereneForm.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SereneForm.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SereneForm.Registration {
    class FormColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Registration {
    interface FormForm {
        Name: Serenity.StringEditor;
        Mail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        MobileNumber: Serenity.IntegerEditor;
        Dob: Serenity.DateEditor;
        CountryId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        UpozelaId: Serenity.LookupEditor;
    }
    class FormForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Registration {
    interface FormRow {
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
    namespace FormRow {
        const idProperty = "RegId";
        const nameProperty = "Name";
        const localTextPrefix = "Registration.Form";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
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
declare namespace SereneForm.Registration {
    namespace FormService {
        const baseUrl = "Registration/Form";
        function Create(request: Serenity.SaveRequest<FormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FormRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Registration/Form/Create",
            Update = "Registration/Form/Update",
            Delete = "Registration/Form/Delete",
            Retrieve = "Registration/Form/Retrieve",
            List = "Registration/Form/List"
        }
    }
}
declare namespace SereneForm {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SereneForm.Texts {
}
declare namespace SereneForm.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SereneForm.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SereneForm.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SereneForm.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SereneForm.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SereneForm.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SereneForm.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneForm.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SereneForm.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SereneForm.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SereneForm.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SereneForm.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SereneForm.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SereneForm.Admission {
    class AddFormDialog extends Serenity.EntityDialog<AddFormRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AddFormForm;
        constructor();
    }
}
declare namespace SereneForm.Admission {
    class AddFormGrid extends Serenity.EntityGrid<AddFormRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AddFormDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Admission {
    class FollowUpDialog extends Serenity.EntityDialog<FollowUpRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FollowUpForm;
    }
}
declare namespace SereneForm.Admission {
    class FollowUpGrid extends Serenity.EntityGrid<FollowUpRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FollowUpDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Admission {
    class GalsDialog extends Serenity.EntityDialog<GalsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: GalsForm;
    }
}
declare namespace SereneForm.Admission {
    class GalsGrid extends Serenity.EntityGrid<GalsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GalsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Admission {
    class InvestigationDialog extends Serenity.EntityDialog<InvestigationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvestigationForm;
        constructor();
    }
}
declare namespace SereneForm.Admission {
    class InvestigationGrid extends Serenity.EntityGrid<InvestigationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvestigationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.LanguageList {
    function getValue(): string[][];
}
declare namespace SereneForm.ScriptInitialization {
}
declare namespace SereneForm.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SereneForm.Default {
    class CityDialog extends Serenity.EntityDialog<CityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CityForm;
    }
}
declare namespace SereneForm.Default {
    class CityGrid extends Serenity.EntityGrid<CityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CityDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Default {
    class CountryDialog extends Serenity.EntityDialog<CountryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CountryForm;
    }
}
declare namespace SereneForm.Default {
    class CountryGrid extends Serenity.EntityGrid<CountryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CountryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Default {
    class UpozelaDialog extends Serenity.EntityDialog<UpozelaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UpozelaForm;
    }
}
declare namespace SereneForm.Default {
    class UpozelaGrid extends Serenity.EntityGrid<UpozelaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UpozelaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SereneForm.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace SereneForm.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Registration {
    class FormDialog extends Serenity.EntityDialog<FormRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FormForm;
    }
}
declare namespace SereneForm.Registration {
    class FormGrid extends Serenity.EntityGrid<FormRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FormDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Default {
    class PusCellColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Default {
    interface PusCellForm {
        HpmData: Serenity.StringEditor;
    }
    class PusCellForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Default {
    interface PusCellRow {
        PuscellId?: number;
        HpmData?: string;
    }
    namespace PusCellRow {
        const idProperty = "PuscellId";
        const nameProperty = "HpmData";
        const localTextPrefix = "Default.PusCell";
        const lookupKey = "Default.PusCell";
        function getLookup(): Q.Lookup<PusCellRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PuscellId = "PuscellId",
            HpmData = "HpmData"
        }
    }
}
declare namespace SereneForm.Default {
    namespace PusCellService {
        const baseUrl = "Default/PusCell";
        function Create(request: Serenity.SaveRequest<PusCellRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PusCellRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PusCellRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PusCellRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PusCell/Create",
            Update = "Default/PusCell/Update",
            Delete = "Default/PusCell/Delete",
            Retrieve = "Default/PusCell/Retrieve",
            List = "Default/PusCell/List"
        }
    }
}
declare namespace SereneForm.Default {
    class PusCellDialog extends Serenity.EntityDialog<PusCellRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PusCellForm;
    }
}
declare namespace SereneForm.Default {
    class PusCellGrid extends Serenity.EntityGrid<PusCellRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PusCellDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SereneForm.Default {
    class RealOthersColumns {
        static columnsKey: string;
    }
}
declare namespace SereneForm.Default {
    interface RealOthersForm {
        InvestOthers: Serenity.StringEditor;
    }
    class RealOthersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneForm.Default {
    interface RealOthersRow {
        OtherId?: number;
        InvestOthers?: string;
    }
    namespace RealOthersRow {
        const idProperty = "OtherId";
        const nameProperty = "InvestOthers";
        const localTextPrefix = "Default.RealOthers";
        const lookupKey = "Default.RealOthers";
        function getLookup(): Q.Lookup<RealOthersRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            OtherId = "OtherId",
            InvestOthers = "InvestOthers"
        }
    }
}
declare namespace SereneForm.Default {
    namespace RealOthersService {
        const baseUrl = "Default/RealOthers";
        function Create(request: Serenity.SaveRequest<RealOthersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RealOthersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RealOthersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RealOthersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/RealOthers/Create",
            Update = "Default/RealOthers/Update",
            Delete = "Default/RealOthers/Delete",
            Retrieve = "Default/RealOthers/Retrieve",
            List = "Default/RealOthers/List"
        }
    }
}
declare namespace SereneForm.Default {
    class RealOthersDialog extends Serenity.EntityDialog<RealOthersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RealOthersForm;
    }
}
declare namespace SereneForm.Default {
    class RealOthersGrid extends Serenity.EntityGrid<RealOthersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RealOthersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
