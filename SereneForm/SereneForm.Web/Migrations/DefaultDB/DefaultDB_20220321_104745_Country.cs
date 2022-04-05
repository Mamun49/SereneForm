using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SereneForm.Migrations.DefaultDB
{
    [Migration(20220321_104745)]
    public class DefaultDB_20220321_104745_Country : Migration
    {
        public override void Up()
        {
            Create.Schema("reg");

            Create.Table("Form2").InSchema("reg")
                .WithColumn("CountryId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("CountryName").AsString(200).NotNullable();
                //.WithColumn("Mail").AsString(1000).Nullable()
                //.WithColumn("Address").AsString(Int32.MaxValue).Nullable()
                //.WithColumn("Mobile Number").AsInt32().Nullable()
                //.WithColumn("DOB").AsDateTime().Nullable()
                //.WithColumn("City").AsString(10).Nullable();
        }

        public override void Down()
        {
        }
    }
}