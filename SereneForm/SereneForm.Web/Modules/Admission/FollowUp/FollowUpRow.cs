using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace SereneForm.Admission
{
    [ConnectionKey("Default"), Module("Admission"), TableName("[dbo].[FollowUp]")]
    [DisplayName("Follow Up"), InstanceName("Follow Up")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class FollowUpRow : Row<FollowUpRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Foll Id"), Identity, IdProperty]
        public int? FollId
        {
            get => fields.FollId[this];
            set => fields.FollId[this] = value;
        }

        [DisplayName("Subjective"), Size(50), QuickSearch, NameProperty]
        public string Subjective
        {
            get => fields.Subjective[this];
            set => fields.Subjective[this] = value;
        }

        [DisplayName("Pulse(bpm)"), Size(50)]
        public string Pulse
        {
            get => fields.Pulse[this];
            set => fields.Pulse[this] = value;
        }

        [DisplayName("BP(mm of Hg)"), Column("BP"), Size(50)]
        public string Bp
        {
            get => fields.Bp[this];
            set => fields.Bp[this] = value;
        }

        [DisplayName("Temp(°F)"), Size(50)]
        public string Temp
        {
            get => fields.Temp[this];
            set => fields.Temp[this] = value;
        }

        [DisplayName("RR(bpm)"), Column("RR"), Size(50)]
        public string Rr
        {
            get => fields.Rr[this];
            set => fields.Rr[this] = value;
        }

        [DisplayName("Urine out put(ml/last 6 hours)"), Size(50)]
        public string Urineoutput
        {
            get => fields.Urineoutput[this];
            set => fields.Urineoutput[this] = value;
        }

        [DisplayName("SpO2(%)"), Size(50)]
        public string SpO2
        {
            get => fields.SpO2[this];
            set => fields.SpO2[this] = value;
        }

        [DisplayName("Others"), Size(50)]
        public string ObjectiveOther
        {
            get => fields.ObjectiveOther[this];
            set => fields.ObjectiveOther[this] = value;
        }

        [DisplayName("Condition"), Size(50)]
        public conditionenum? Condition
        {
            get => (conditionenum?)fields.Condition[this];
            set => fields.Condition[this] = (Int32?)value;
        }

        [DisplayName("New diagnosis or complication"), Size(50)]
        public string Newdiagnosis
        {
            get => fields.Newdiagnosis[this];
            set => fields.Newdiagnosis[this] = value;
        }

        [DisplayName("Investigation"), Size(50)]
        public string Investigation
        {
            get => fields.Investigation[this];
            set => fields.Investigation[this] = value;
        }

        [DisplayName("Consultation with other ward"), Size(50)]
        public string Consultation
        {
            get => fields.Consultation[this];
            set => fields.Consultation[this] = value;
        }

        [DisplayName("Discharge"), Size(50)]
        public dischargeenum? Discharge
        {
            get => (dischargeenum?)fields.Discharge[this];
            set => fields.Discharge[this] = (Int32?)value;
        }

        public FollowUpRow()
            : base()
        {
        }

        public FollowUpRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FollId;
            public StringField Subjective;
            public StringField Pulse;
            public StringField Bp;
            public StringField Temp;
            public StringField Rr;
            public StringField Urineoutput;
            public StringField SpO2;
            public StringField ObjectiveOther;
            public Int32Field Condition;
            public StringField Newdiagnosis;
            public StringField Investigation;
            public StringField Consultation;
            public Int32Field Discharge;
        }
    }
}
