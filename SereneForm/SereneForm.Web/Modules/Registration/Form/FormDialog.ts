
namespace SereneForm.Registration {

    @Serenity.Decorators.registerClass()
    export class FormDialog extends Serenity.EntityDialog<FormRow, any> {
        protected getFormKey() { return FormForm.formKey; }
        protected getIdProperty() { return FormRow.idProperty; }
        protected getLocalTextPrefix() { return FormRow.localTextPrefix; }
        protected getNameProperty() { return FormRow.nameProperty; }
        protected getService() { return FormService.baseUrl; }
        protected getDeletePermission() { return FormRow.deletePermission; }
        protected getInsertPermission() { return FormRow.insertPermission; }
        protected getUpdatePermission() { return FormRow.updatePermission; }

        protected form = new FormForm(this.idPrefix);

    }
}