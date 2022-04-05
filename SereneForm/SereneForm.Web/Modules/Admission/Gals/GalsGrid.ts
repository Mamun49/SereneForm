
namespace SereneForm.Admission {

    @Serenity.Decorators.registerClass()
    export class GalsGrid extends Serenity.EntityGrid<GalsRow, any> {
        protected getColumnsKey() { return GalsColumns.columnsKey; }
        protected getDialogType() { return GalsDialog; }
        protected getIdProperty() { return GalsRow.idProperty; }
        protected getInsertPermission() { return GalsRow.insertPermission; }
        protected getLocalTextPrefix() { return GalsRow.localTextPrefix; }
        protected getService() { return GalsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}