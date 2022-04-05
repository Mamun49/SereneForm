using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Admission.GalsRow;

namespace SereneForm.Admission
{
    public interface IGalsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GalsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGalsDeleteHandler
    {
        public GalsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}