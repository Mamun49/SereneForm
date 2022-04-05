using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Default.RealOthersRow>;
using MyRow = SereneForm.Default.RealOthersRow;

namespace SereneForm.Default
{
    public interface IRealOthersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class RealOthersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRealOthersRetrieveHandler
    {
        public RealOthersRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}