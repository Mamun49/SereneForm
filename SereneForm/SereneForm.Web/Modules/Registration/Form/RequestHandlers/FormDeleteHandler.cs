using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Registration.FormRow;

namespace SereneForm.Registration
{
    public interface IFormDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class FormDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IFormDeleteHandler
    {
        public FormDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}