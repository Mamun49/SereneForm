namespace SereneForm.Registration {
    export interface FormForm {
        Name: Serenity.StringEditor;
        Mail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        MobileNumber: Serenity.IntegerEditor;
        Dob: Serenity.DateEditor;
        CountryId: Serenity.LookupEditor;
        CityId: Serenity.LookupEditor;
        UpozelaId: Serenity.LookupEditor;
    }

    export class FormForm extends Serenity.PrefixedContext {
        static formKey = 'Registration.Form';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FormForm.init)  {
                FormForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(FormForm, [
                    'Name', w0,
                    'Mail', w0,
                    'Address', w0,
                    'MobileNumber', w1,
                    'Dob', w2,
                    'CountryId', w3,
                    'CityId', w3,
                    'UpozelaId', w3
                ]);
            }
        }
    }
}
