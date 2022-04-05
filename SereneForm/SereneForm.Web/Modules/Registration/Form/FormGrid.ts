
namespace SereneForm.Registration {

    @Serenity.Decorators.registerClass()
    export class FormGrid extends Serenity.EntityGrid<FormRow, any> {
        protected getColumnsKey() { return FormColumns.columnsKey; }
        protected getDialogType() { return FormDialog; }
        protected getIdProperty() { return FormRow.idProperty; }
        protected getInsertPermission() { return FormRow.insertPermission; }
        protected getLocalTextPrefix() { return FormRow.localTextPrefix; }
        protected getService() { return FormService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}