using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SereneForm.Migrations.DefaultDB
{
    [Migration(20220321_104745)]
    public class DefaultDB_20220321_104745_FormDB : Migration
    {
        public override void Up()
        {
            Create.Schema("reg");

            Create.Table("Form").InSchema("reg")
                .WithColumn("RegId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Mail").AsString(1000).Nullable()
                .WithColumn("Address").AsString(Int32.MaxValue).Nullable()
                .WithColumn("Mobile Number").AsInt32().Nullable()
                .WithColumn("DOB").AsDateTime().Nullable()
                .WithColumn("CityId").AsString(10).Nullable()
                .WithColumn("CountryId").AsString(10).Nullable();
        }

        public override void Down()
        {
        }
    }
}