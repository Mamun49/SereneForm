using FluentMigrator;
using Serenity.Extensions;
using System;

namespace SereneForm.Migrations.DefaultDB
{
    [Migration(20220323_104745)]
    public class DefaultDB_20220323104745_Gals : Migration
    {
        public override void Up()
        {
            Create.Schema("reg");

            Create.Table("Gals").InSchema("reg")
                .WithColumn("GalId").AsInt32()
                    .Identity().PrimaryKey().NotNullable()
                .WithColumn("SchoberTest").AsString(200).NotNullable()



                .WithColumn("TestforthesacroilicJoints").AsString(1000).Nullable()
                .WithColumn("CompressionTest").AsString(50).Nullable()
                .WithColumn("DistractionTest").AsString(50).Nullable()
                .WithColumn("TendernessOverSIjointsandMiddleofsacrum").AsString(50).Nullable()



                .WithColumn("TrendelenburgsTest").AsString(50).Nullable()
                .WithColumn("Limbsortening").AsString(10).Nullable()
                .WithColumn("Testforflexingdeformity").AsString(10).Nullable()
                .WithColumn("TestForAbductionorAdductionorFlexionorExtension").AsString(10).Nullable()


                .WithColumn("AttituteofJoints").AsString(10).Nullable()

                .WithColumn("Temperature").AsString(10).Nullable()
                .WithColumn("Tenderness").AsString(10).Nullable()
                .WithColumn("BeckersTest").AsString(10).Nullable()

                .WithColumn("ThePatellarTest").AsString(10).Nullable()
                .WithColumn("TheBulgeTest").AsString(10).Nullable()


                .WithColumn("TestForMedialandLateralCollateralLigaments").AsString(10).Nullable()
                .WithColumn("Testsforanteriorposteriorcrucialligaments").AsString(10).Nullable();


        }

        public override void Down()
        {
        }
    }
}