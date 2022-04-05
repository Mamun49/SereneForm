namespace SereneForm.Default {
    export interface RealOthersForm {
        InvestOthers: Serenity.StringEditor;
    }

    export class RealOthersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.RealOthers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RealOthersForm.init)  {
                RealOthersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RealOthersForm, [
                    'InvestOthers', w0
                ]);
            }
        }
    }
}
