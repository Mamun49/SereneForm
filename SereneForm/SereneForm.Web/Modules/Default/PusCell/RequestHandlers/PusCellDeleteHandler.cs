using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Default.PusCellRow;

namespace SereneForm.Default
{
    public interface IPusCellDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PusCellDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPusCellDeleteHandler
    {
        public PusCellDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}