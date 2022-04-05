using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Admission.InvestigationRow;

namespace SereneForm.Admission
{
    public interface IInvestigationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InvestigationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInvestigationDeleteHandler
    {
        public InvestigationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}