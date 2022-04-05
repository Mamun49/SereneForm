
namespace SereneForm.Admission {

    @Serenity.Decorators.registerClass()
    export class FollowUpGrid extends Serenity.EntityGrid<FollowUpRow, any> {
        protected getColumnsKey() { return FollowUpColumns.columnsKey; }
        protected getDialogType() { return FollowUpDialog; }
        protected getIdProperty() { return FollowUpRow.idProperty; }
        protected getInsertPermission() { return FollowUpRow.insertPermission; }
        protected getLocalTextPrefix() { return FollowUpRow.localTextPrefix; }
        protected getService() { return FollowUpService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}