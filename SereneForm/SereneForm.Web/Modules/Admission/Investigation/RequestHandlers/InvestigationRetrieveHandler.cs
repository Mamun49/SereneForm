using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Admission.InvestigationRow>;
using MyRow = SereneForm.Admission.InvestigationRow;

namespace SereneForm.Admission
{
    public interface IInvestigationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvestigationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInvestigationRetrieveHandler
    {
        public InvestigationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}