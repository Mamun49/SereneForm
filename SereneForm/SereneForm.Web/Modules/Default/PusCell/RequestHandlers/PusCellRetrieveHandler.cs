using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Default.PusCellRow>;
using MyRow = SereneForm.Default.PusCellRow;

namespace SereneForm.Default
{
    public interface IPusCellRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PusCellRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPusCellRetrieveHandler
    {
        public PusCellRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}