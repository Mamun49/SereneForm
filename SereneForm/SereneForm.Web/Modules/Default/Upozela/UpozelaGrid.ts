
namespace SereneForm.Default {

    @Serenity.Decorators.registerClass()
    export class UpozelaGrid extends Serenity.EntityGrid<UpozelaRow, any> {
        protected getColumnsKey() { return UpozelaColumns.columnsKey; }
        protected getDialogType() { return UpozelaDialog; }
        protected getIdProperty() { return UpozelaRow.idProperty; }
        protected getInsertPermission() { return UpozelaRow.insertPermission; }
        protected getLocalTextPrefix() { return UpozelaRow.localTextPrefix; }
        protected getService() { return UpozelaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}