using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SereneForm.Migrations.DefaultDB
{
    [Migration(20220321_104745)]
    public class DefaultDB_20220321_104745_Admission : Migration
    {
        public override void Up()
        {
            Create.Schema("reg");

            Create.Table("Admission").InSchema("reg")
                .WithColumn("RegId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Skin").AsString(200).NotNullable()
                .WithColumn("SkinText").AsString(200).NotNullable()
                .WithColumn("Nail").AsString(1000).Nullable()
                .WithColumn("NailText").AsString(200).NotNullable()
                .WithColumn("Soft Tissue").AsString(50).Nullable()
                .WithColumn("Rash").AsString(50).Nullable()
                .WithColumn("RaynaudsPhenomenon").AsString(50).Nullable()
                .WithColumn("Eye").AsString(50).Nullable()
                .WithColumn("Genitalia").AsString(10).Nullable()
                .WithColumn("Nodule").AsString(10).Nullable()
                .WithColumn("OralUlceration").AsString(10).Nullable()
                .WithColumn("Tophi").AsString(10).Nullable()
                .WithColumn("Lymph Nodes").AsString(10).Nullable();
        }

        public override void Down()
        {
        }
    }
}