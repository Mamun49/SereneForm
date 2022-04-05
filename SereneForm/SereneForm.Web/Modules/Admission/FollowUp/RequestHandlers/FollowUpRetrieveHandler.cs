using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Admission.FollowUpRow>;
using MyRow = SereneForm.Admission.FollowUpRow;

namespace SereneForm.Admission
{
    public interface IFollowUpRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class FollowUpRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IFollowUpRetrieveHandler
    {
        public FollowUpRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}