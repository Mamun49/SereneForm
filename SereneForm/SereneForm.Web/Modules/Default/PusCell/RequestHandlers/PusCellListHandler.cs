using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Default.PusCellRow>;
using MyRow = SereneForm.Default.PusCellRow;

namespace SereneForm.Default
{
    public interface IPusCellListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PusCellListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPusCellListHandler
    {
        public PusCellListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}