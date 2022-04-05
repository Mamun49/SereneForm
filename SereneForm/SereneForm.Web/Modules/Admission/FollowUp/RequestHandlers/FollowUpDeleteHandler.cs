using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Admission.FollowUpRow;

namespace SereneForm.Admission
{
    public interface IFollowUpDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class FollowUpDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IFollowUpDeleteHandler
    {
        public FollowUpDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}