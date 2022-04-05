
namespace SereneForm.Admission {


    @Serenity.Decorators.panel()
    export class AddFormDialog extends Serenity.EntityDialog<AddFormRow, any> {
        protected getFormKey() { return AddFormForm.formKey; }
        protected getIdProperty() { return AddFormRow.idProperty; }
        protected getLocalTextPrefix() { return AddFormRow.localTextPrefix; }
        protected getNameProperty() { return AddFormRow.nameProperty; }
        protected getService() { return AddFormService.baseUrl; }
        protected getDeletePermission() { return AddFormRow.deletePermission; }
        protected getInsertPermission() { return AddFormRow.insertPermission; }
        protected getUpdatePermission() { return AddFormRow.updatePermission; }

        protected form = new AddFormForm(this.idPrefix);
        constructor() {
            super();
            this.form.SkinText.getGridField().toggle(false);
            this.form.Skin.changeSelect2(x => {
                
                var skin = Q.toId(this.form.Skin.value);
                if (skin == "2") {
                    this.form.SkinText.getGridField().toggle(true);
                }
                else {
                    this.form.SkinText.getGridField().toggle(false);
                }

            });
            this.form.NailText.getGridField().toggle(false);
            this.form.Nail.changeSelect2(x => {

                var Nail = Q.toId(this.form.Nail.value);
                if (Nail == "2") {
                    this.form.NailText.getGridField().toggle(true);
                }
                else {
                    this.form.NailText.getGridField().toggle(false);
                }

            });

        }
    }
}