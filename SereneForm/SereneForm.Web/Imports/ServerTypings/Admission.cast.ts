namespace SereneForm.Admission {
    export enum cast {
        None = 1,
        hyaline = 2,
        cellular = 3,
        RBC = 4,
        Others = 5
    }
    Serenity.Decorators.registerEnumType(cast, 'SereneForm.Admission.cast', 'SereneForm.Admission.Forms.cast');
}
