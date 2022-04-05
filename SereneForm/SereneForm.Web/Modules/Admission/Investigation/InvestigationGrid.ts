
namespace SereneForm.Admission {

    @Serenity.Decorators.registerClass()
    export class InvestigationGrid extends Serenity.EntityGrid<InvestigationRow, any> {
        protected getColumnsKey() { return InvestigationColumns.columnsKey; }
        protected getDialogType() { return InvestigationDialog; }
        protected getIdProperty() { return InvestigationRow.idProperty; }
        protected getInsertPermission() { return InvestigationRow.insertPermission; }
        protected getLocalTextPrefix() { return InvestigationRow.localTextPrefix; }
        protected getService() { return InvestigationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}