
namespace SereneForm.Default {

    @Serenity.Decorators.registerClass()
    export class RealOthersDialog extends Serenity.EntityDialog<RealOthersRow, any> {
        protected getFormKey() { return RealOthersForm.formKey; }
        protected getIdProperty() { return RealOthersRow.idProperty; }
        protected getLocalTextPrefix() { return RealOthersRow.localTextPrefix; }
        protected getNameProperty() { return RealOthersRow.nameProperty; }
        protected getService() { return RealOthersService.baseUrl; }
        protected getDeletePermission() { return RealOthersRow.deletePermission; }
        protected getInsertPermission() { return RealOthersRow.insertPermission; }
        protected getUpdatePermission() { return RealOthersRow.updatePermission; }

        protected form = new RealOthersForm(this.idPrefix);

    }
}