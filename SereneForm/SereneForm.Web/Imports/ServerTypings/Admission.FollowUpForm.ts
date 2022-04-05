namespace SereneForm.Admission {
    export interface FollowUpForm {
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

    export class FollowUpForm extends Serenity.PrefixedContext {
        static formKey = 'Admission.FollowUp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FollowUpForm.init)  {
                FollowUpForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;

                Q.initFormType(FollowUpForm, [
                    'Subjective', w0,
                    'Pulse', w1,
                    'Bp', w1,
                    'Temp', w1,
                    'Rr', w1,
                    'Urineoutput', w1,
                    'SpO2', w1,
                    'ObjectiveOther', w0,
                    'Condition', w2,
                    'Newdiagnosis', w1,
                    'Investigation', w0,
                    'Consultation', w0,
                    'Discharge', w2
                ]);
            }
        }
    }
}
