using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Admission.InvestigationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Admission.InvestigationRow;

namespace SereneForm.Admission
{
    public interface IInvestigationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvestigationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvestigationSaveHandler
    {
        public InvestigationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}