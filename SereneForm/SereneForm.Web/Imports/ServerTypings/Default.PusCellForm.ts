namespace SereneForm.Default {
    export interface PusCellForm {
        HpmData: Serenity.StringEditor;
    }

    export class PusCellForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PusCell';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PusCellForm.init)  {
                PusCellForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PusCellForm, [
                    'HpmData', w0
                ]);
            }
        }
    }
}
