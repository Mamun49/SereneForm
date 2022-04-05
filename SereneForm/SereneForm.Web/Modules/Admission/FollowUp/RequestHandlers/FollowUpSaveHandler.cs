using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Admission.FollowUpRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Admission.FollowUpRow;

namespace SereneForm.Admission
{
    public interface IFollowUpSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class FollowUpSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IFollowUpSaveHandler
    {
        public FollowUpSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}