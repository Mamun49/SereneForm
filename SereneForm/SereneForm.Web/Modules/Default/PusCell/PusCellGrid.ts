
namespace SereneForm.Default {

    @Serenity.Decorators.registerClass()
    export class PusCellGrid extends Serenity.EntityGrid<PusCellRow, any> {
        protected getColumnsKey() { return PusCellColumns.columnsKey; }
        protected getDialogType() { return PusCellDialog; }
        protected getIdProperty() { return PusCellRow.idProperty; }
        protected getInsertPermission() { return PusCellRow.insertPermission; }
        protected getLocalTextPrefix() { return PusCellRow.localTextPrefix; }
        protected getService() { return PusCellService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}