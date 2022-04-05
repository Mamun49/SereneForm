using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Admission.InvestigationRow>;
using MyRow = SereneForm.Admission.InvestigationRow;

namespace SereneForm.Admission
{
    public interface IInvestigationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InvestigationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInvestigationListHandler
    {
        public InvestigationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}