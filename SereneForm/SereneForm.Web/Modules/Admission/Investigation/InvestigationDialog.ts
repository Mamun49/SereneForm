
namespace SereneForm.Admission {

    @Serenity.Decorators.panel()
    export class InvestigationDialog extends Serenity.EntityDialog<InvestigationRow, any> {
        protected getFormKey() { return InvestigationForm.formKey; }
        protected getIdProperty() { return InvestigationRow.idProperty; }
        protected getLocalTextPrefix() { return InvestigationRow.localTextPrefix; }
        protected getNameProperty() { return InvestigationRow.nameProperty; }
        protected getService() { return InvestigationService.baseUrl; }
        protected getDeletePermission() { return InvestigationRow.deletePermission; }
        protected getInsertPermission() { return InvestigationRow.insertPermission; }
        protected getUpdatePermission() { return InvestigationRow.updatePermission; }

        protected form = new InvestigationForm(this.idPrefix);
        constructor() {
            super();
            
            this.form.PbfAbnormal.getGridField().toggle(false);
            this.form.Pbf.changeSelect2(x => {
                var skin = Q.toId(this.form.Pbf.value);
                
                if (skin == "2") {
                    this.form.PbfAbnormal.getGridField().toggle(true);
                }
                else {
                    this.form.PbfAbnormal.getGridField().toggle(false);
                }

            });
            

           //var btHblabel = $('.Hblabel')[0];
          //var btESRlabel = $('.ESRlable')[0];
 //           var btTClabel = $('.TClable')[0];
 //           var btPLTlabel = $('.PLTlable')[0];
 //           var btNlabel = $('.Nlable')[0];
 //           var btLlabel = $('.Llable')[0];
 //           var btElabel = $('.Elable')[0];
           
 //           var btMCHlabel = $('.MCHlable')[0];
 //           var btMCHClabel = $('.MCHClable')[0];
 //           var btFBSlabel = $('.FBSlable')[0];
 //           var btHA75label = $('.HA75lable')[0];
 //           var btHBFlabel = $('.HBFlable')[0];
 //           var btHbA1Clabel = $('.HbA1Clable')[0];
 //           var btNalabel = $('.Nalable')[0];
 //           var btKlabel = $('.Klable')[0];
 //           var btHCO3label = $('.HCO3lable')[0];
 //           var btCllabel = $('.Cllable')[0];
           
 //           var btTSHlabel = $('.TSHlable')[0];
 //           var btT3label = $('.T3lable')[0];

 //           var btT4label = $('.T4lable')[0];
 //           var btFT3label = $('.FT3lable')[0];
 //           var btFT4label = $('.FT4lable')[0];
 //           var btSlabel = $('.Slable')[0];
 //           var btBloodlabel = $('.Bloodlable')[0];
 //           var btACRlabel = $('.ACRlable')[0];
 //           var btPCRlabel = $('.PCRlable')[0];




            //btHblabel.innerHTML = `<span class="label label-default Hblabel" style="font-size:15px">mg/dl</span>`;
            //btESRlabel.innerHTML = `<span class="label label-default ESRlabel" style="font-size:15px">mm in 1sthr</span>`;
 //           btTClabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">/x10³/L</span>`;
 //           btPLTlabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">/cmm</span>`;
 //           btNlabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">%</span>`;
 //           btLlabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btElabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btMCHlabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">pg(Normal:29.5±2.5)</span>`;
 //           btMCHClabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">(Normal:30±1.5)</span>`;
 //           btFBSlabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btHA75label.innerHTML = `<span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btHBFlabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btHbA1Clabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">%</span>`;
 //           btNalabel.innerHTML = `<span class="label label-default mg" style="font-size:15px">mmol/L</span>`;
 //           btKlabel.innerHTML = `
 //<span class="label label-default mg" style="font-size:15px">mmol/L</span>`;
 //           btHCO3label.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">mmol/L</span>`;
 //           btCllabel.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">mmol/L</span>`;
 //           btTSHlabel.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">μΙU/L</span>`;
 //           btT3label.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">ng/dl</span>`;
 //           btT4label.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">ng/dl</span>`;
 //           btFT3label.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">ng/dl</span>`;
 //           btFT4label.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">ng/dl</span>`;
 //           btSlabel.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btBloodlabel.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
 //           btACRlabel.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">mg/g</span>`;
 //           btPCRlabel.innerHTML = `
 //               <span class="label label-default mg" style="font-size:15px">mg/gm</span>`;
            //Hblabel.innerHTML = `
            //    <span class="label label-default mg" style="font-size:15px">mg/dl</span>`;
            //Hblabel.innerHTML = `
            //    <span class="label label-default mg" style="font-size:15px">mg/dl</span>`;

            //btnAgeAtMenarcheLabel1.innerHTML = `
            //    <span class="label label-default AgeAtMenarcheLabel1" style="font-size:15px">years</span>`;
            //btnAgeAtMenarcheLabel2.innerHTML = `
            //    <span class="label label-default AgeAtMenarcheLabel1" style="font-size:15px">years</span>`;
        }
        //public addtoRealothers() {
        //    if (this.form.Realothers.value != null) {
        //        if (this.form.Realothers.value == "") {
        //            //this.form.Realothers.value = this.form.Realothers.text;
        //        }
        //        else {

        //            this.form.Realothers.value = this.form.Realothers.value + "\n" + this.form.Realothers.text;
        //        }
        //    }
        //}
        //getToolbarButtons() {
        //    var buttons = super.getToolbarButtons();
        //    buttons.push(SereneForm.Admission.createToolButton({
        //        title: 'Complication Details',
        //        cssClass: 'export-pdf-button',
        //        reportKey: 'Default.Complication',
        //        getParams: () => ({
        //            ComplicationId: this.get_entityId()
        //        })
        //    }));

        //    return buttons;
        //}
    }
}