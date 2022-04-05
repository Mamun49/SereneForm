using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Default.RealOthersRow;

namespace SereneForm.Default
{
    public interface IRealOthersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class RealOthersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRealOthersDeleteHandler
    {
        public RealOthersDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}