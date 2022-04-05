using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Admission.GalsRow>;
using MyRow = SereneForm.Admission.GalsRow;

namespace SereneForm.Admission
{
    public interface IGalsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class GalsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGalsRetrieveHandler
    {
        public GalsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}