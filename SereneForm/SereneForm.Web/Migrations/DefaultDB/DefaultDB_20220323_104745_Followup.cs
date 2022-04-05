using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SereneForm.Migrations.DefaultDB
{
    [Migration(20220323_104745)]
    public class DefaultDB_20220323104745_Followup : Migration
    {
        public override void Up()
        {
            Create.Schema("aaa");

            Create.Table("Followup").InSchema("aaa")
                .WithColumn("FollId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Subjective").AsString(200).NotNullable()



                .WithColumn("Pulse").AsString(1000).Nullable()
                .WithColumn("PulseLabel").AsString(50).Nullable()
                .WithColumn("BP").AsString(50).Nullable()
                .WithColumn("BPLabel").AsString(50).Nullable()



                .WithColumn("Temp").AsString(50).Nullable()
                .WithColumn("TempLabel").AsString(10).Nullable()
                .WithColumn("RR").AsString(10).Nullable()
                .WithColumn("RRLabel").AsString(10).Nullable()


                .WithColumn("UrineOutPut").AsString(10).Nullable()

                .WithColumn("UrineLabel").AsString(10).Nullable()
                .WithColumn("SpO2").AsString(10).Nullable()
                .WithColumn("SpLabel").AsString(10).Nullable()

                .WithColumn("ObjectiveOthers").AsString(10).Nullable()
                .WithColumn("Condition ").AsString(10).Nullable()


                .WithColumn("Newdiagnosisorcomplication").AsString(10).Nullable()
                .WithColumn("Investigation").AsString(50).Nullable()
                .WithColumn("Consultation with other ward").AsString(50).Nullable()
                .WithColumn("Discharge").AsString(50).Nullable();


        }

        public override void Down()
        {
        }
    }
}