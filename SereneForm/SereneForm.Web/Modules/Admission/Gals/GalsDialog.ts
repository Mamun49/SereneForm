
namespace SereneForm.Admission {

    @Serenity.Decorators.registerClass()
    export class GalsDialog extends Serenity.EntityDialog<GalsRow, any> {
        protected getFormKey() { return GalsForm.formKey; }
        protected getIdProperty() { return GalsRow.idProperty; }
        protected getLocalTextPrefix() { return GalsRow.localTextPrefix; }
        protected getNameProperty() { return GalsRow.nameProperty; }
        protected getService() { return GalsService.baseUrl; }
        protected getDeletePermission() { return GalsRow.deletePermission; }
        protected getInsertPermission() { return GalsRow.insertPermission; }
        protected getUpdatePermission() { return GalsRow.updatePermission; }

        protected form = new GalsForm(this.idPrefix);

    }
}