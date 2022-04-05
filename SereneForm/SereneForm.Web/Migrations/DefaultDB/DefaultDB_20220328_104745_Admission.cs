using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SereneForm.Migrations.DefaultDB
{
    [Migration(20220328_104745)]
    public class DefaultDB_20220328104745_Admission : Migration
    {
        public override void Up()
        {
            Create.Schema("reg");

            Create.Table("Admission").InSchema("reg")
                .WithColumn("InvId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Haematology").AsString(200).NotNullable()
                
                
                
                .WithColumn("Hb").AsString(1000).Nullable()
                .WithColumn("Esr").AsString(50).Nullable()
                .WithColumn("Tc").AsString(50).Nullable()
                .WithColumn("Plt").AsString(50).Nullable()
                
                
                
                .WithColumn("N").AsString(50).Nullable()
                .WithColumn("L").AsString(10).Nullable()
                .WithColumn("E").AsString(10).Nullable()
                .WithColumn("Pcv").AsString(10).Nullable()
                
                
                .WithColumn("Mch").AsString(10).Nullable()
                
                .WithColumn("Mchc ").AsString(10).Nullable()
                .WithColumn("Fbs ").AsString(10).Nullable()
                .WithColumn("Ha75Glucose ").AsString(10).Nullable()

                .WithColumn("Hbf ").AsString(10).Nullable()
                .WithColumn("HbA1C ").AsString(10).Nullable()


                .WithColumn("Pbf").AsString(10).Nullable()
                .WithColumn("PbfAbnormal").AsString(10).Nullable();


        }

        public override void Down()
        {
        }
    }
}