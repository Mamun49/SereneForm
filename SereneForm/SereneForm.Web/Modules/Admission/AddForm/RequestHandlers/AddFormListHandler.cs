using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Admission.AddFormRow>;
using MyRow = SereneForm.Admission.AddFormRow;

namespace SereneForm.Admission
{
    public interface IAddFormListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AddFormListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAddFormListHandler
    {
        public AddFormListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}