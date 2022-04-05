
namespace SereneForm.Default {

    @Serenity.Decorators.registerClass()
    export class PusCellDialog extends Serenity.EntityDialog<PusCellRow, any> {
        protected getFormKey() { return PusCellForm.formKey; }
        protected getIdProperty() { return PusCellRow.idProperty; }
        protected getLocalTextPrefix() { return PusCellRow.localTextPrefix; }
        protected getNameProperty() { return PusCellRow.nameProperty; }
        protected getService() { return PusCellService.baseUrl; }
        protected getDeletePermission() { return PusCellRow.deletePermission; }
        protected getInsertPermission() { return PusCellRow.insertPermission; }
        protected getUpdatePermission() { return PusCellRow.updatePermission; }

        protected form = new PusCellForm(this.idPrefix);

    }
}