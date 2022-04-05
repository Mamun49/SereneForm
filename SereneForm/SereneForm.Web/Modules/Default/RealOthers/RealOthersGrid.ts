
namespace SereneForm.Default {

    @Serenity.Decorators.registerClass()
    export class RealOthersGrid extends Serenity.EntityGrid<RealOthersRow, any> {
        protected getColumnsKey() { return RealOthersColumns.columnsKey; }
        protected getDialogType() { return RealOthersDialog; }
        protected getIdProperty() { return RealOthersRow.idProperty; }
        protected getInsertPermission() { return RealOthersRow.insertPermission; }
        protected getLocalTextPrefix() { return RealOthersRow.localTextPrefix; }
        protected getService() { return RealOthersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}