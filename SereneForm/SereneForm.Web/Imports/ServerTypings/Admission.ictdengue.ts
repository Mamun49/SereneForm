namespace SereneForm.Admission {
    export enum ictdengue {
        Negative = 1,
        PositiveIgG = 2,
        PositiveIgM = 3,
        PositiveBothIgGandIgM = 4,
        NotDone = 5
    }
    Serenity.Decorators.registerEnumType(ictdengue, 'SereneForm.Admission.ictdengue', 'SereneForm.Admission.Forms.ictdengue');
}
