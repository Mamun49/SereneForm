
namespace SereneForm.Admission {

    @Serenity.Decorators.registerClass()
    export class AddFormGrid extends Serenity.EntityGrid<AddFormRow, any> {
        protected getColumnsKey() { return AddFormColumns.columnsKey; }
        protected getDialogType() { return AddFormDialog; }
        protected getIdProperty() { return AddFormRow.idProperty; }
        protected getInsertPermission() { return AddFormRow.insertPermission; }
        protected getLocalTextPrefix() { return AddFormRow.localTextPrefix; }
        protected getService() { return AddFormService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}