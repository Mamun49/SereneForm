namespace SereneForm.Admission {
    export enum albumin {
        absent = 1,
        trace = 2,
        plus = 3,
        plus2 = 4,
        plus3 = 5,
        plus4 = 6
    }
    Serenity.Decorators.registerEnumType(albumin, 'SereneForm.Admission.albumin', 'SereneForm.Admission.Forms.albumin');
}
