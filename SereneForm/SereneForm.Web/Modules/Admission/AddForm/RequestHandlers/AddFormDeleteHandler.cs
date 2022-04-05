using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Admission.AddFormRow;

namespace SereneForm.Admission
{
    public interface IAddFormDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AddFormDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAddFormDeleteHandler
    {
        public AddFormDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}