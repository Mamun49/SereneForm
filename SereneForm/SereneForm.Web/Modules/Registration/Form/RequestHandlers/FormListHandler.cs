using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Registration.FormRow>;
using MyRow = SereneForm.Registration.FormRow;

namespace SereneForm.Registration
{
    public interface IFormListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class FormListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IFormListHandler
    {
        public FormListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}