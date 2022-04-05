using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Default.RealOthersRow>;
using MyRow = SereneForm.Default.RealOthersRow;

namespace SereneForm.Default
{
    public interface IRealOthersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class RealOthersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRealOthersListHandler
    {
        public RealOthersListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}