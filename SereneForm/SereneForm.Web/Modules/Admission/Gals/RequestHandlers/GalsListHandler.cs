using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Admission.GalsRow>;
using MyRow = SereneForm.Admission.GalsRow;

namespace SereneForm.Admission
{
    public interface IGalsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class GalsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGalsListHandler
    {
        public GalsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}