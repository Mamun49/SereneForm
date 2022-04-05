using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Admission.FollowUpRow>;
using MyRow = SereneForm.Admission.FollowUpRow;

namespace SereneForm.Admission
{
    public interface IFollowUpListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class FollowUpListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IFollowUpListHandler
    {
        public FollowUpListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}