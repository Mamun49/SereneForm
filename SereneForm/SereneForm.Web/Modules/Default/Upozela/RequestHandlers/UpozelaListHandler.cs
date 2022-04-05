using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Default.UpozelaRow>;
using MyRow = SereneForm.Default.UpozelaRow;

namespace SereneForm.Default
{
    public interface IUpozelaListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UpozelaListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUpozelaListHandler
    {
        public UpozelaListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}