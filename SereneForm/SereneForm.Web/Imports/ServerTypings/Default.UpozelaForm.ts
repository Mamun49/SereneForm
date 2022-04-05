namespace SereneForm.Default {
    export interface UpozelaForm {
        UpozelaId: Serenity.IntegerEditor;
        UpozelaName: Serenity.StringEditor;
        CityId: Serenity.LookupEditor;
    }

    export class UpozelaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Upozela';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UpozelaForm.init)  {
                UpozelaForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(UpozelaForm, [
                    'UpozelaId', w0,
                    'UpozelaName', w1,
                    'CityId', w2
                ]);
            }
        }
    }
}
