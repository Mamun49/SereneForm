namespace SereneForm.Admission {
    export enum conditionenum {
        Improved = 1,
        Deteriorated = 2,
        Static = 3
    }
    Serenity.Decorators.registerEnumType(conditionenum, 'SereneForm.Admission.conditionenum', 'Admission.FollowUp');
}
