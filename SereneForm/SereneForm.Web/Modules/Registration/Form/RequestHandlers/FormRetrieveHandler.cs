using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Registration.FormRow>;
using MyRow = SereneForm.Registration.FormRow;

namespace SereneForm.Registration
{
    public interface IFormRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class FormRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IFormRetrieveHandler
    {
        public FormRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}