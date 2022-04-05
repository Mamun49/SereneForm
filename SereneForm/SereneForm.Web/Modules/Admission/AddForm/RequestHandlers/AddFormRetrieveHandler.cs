using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Admission.AddFormRow>;
using MyRow = SereneForm.Admission.AddFormRow;

namespace SereneForm.Admission
{
    public interface IAddFormRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AddFormRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAddFormRetrieveHandler
    {
        public AddFormRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}