
namespace SereneForm.Admission {

    @Serenity.Decorators.registerClass()
    export class FollowUpDialog extends Serenity.EntityDialog<FollowUpRow, any> {
        protected getFormKey() { return FollowUpForm.formKey; }
        protected getIdProperty() { return FollowUpRow.idProperty; }
        protected getLocalTextPrefix() { return FollowUpRow.localTextPrefix; }
        protected getNameProperty() { return FollowUpRow.nameProperty; }
        protected getService() { return FollowUpService.baseUrl; }
        protected getDeletePermission() { return FollowUpRow.deletePermission; }
        protected getInsertPermission() { return FollowUpRow.insertPermission; }
        protected getUpdatePermission() { return FollowUpRow.updatePermission; }

        protected form = new FollowUpForm(this.idPrefix);

    }
}