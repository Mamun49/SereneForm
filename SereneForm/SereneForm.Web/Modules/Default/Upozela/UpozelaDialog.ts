
namespace SereneForm.Default {

    @Serenity.Decorators.registerClass()
    export class UpozelaDialog extends Serenity.EntityDialog<UpozelaRow, any> {
        protected getFormKey() { return UpozelaForm.formKey; }
        protected getIdProperty() { return UpozelaRow.idProperty; }
        protected getLocalTextPrefix() { return UpozelaRow.localTextPrefix; }
        protected getNameProperty() { return UpozelaRow.nameProperty; }
        protected getService() { return UpozelaService.baseUrl; }
        protected getDeletePermission() { return UpozelaRow.deletePermission; }
        protected getInsertPermission() { return UpozelaRow.insertPermission; }
        protected getUpdatePermission() { return UpozelaRow.updatePermission; }

        protected form = new UpozelaForm(this.idPrefix);

    }
}