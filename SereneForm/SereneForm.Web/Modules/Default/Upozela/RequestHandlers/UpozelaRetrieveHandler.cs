using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Default.UpozelaRow>;
using MyRow = SereneForm.Default.UpozelaRow;

namespace SereneForm.Default
{
    public interface IUpozelaRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UpozelaRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUpozelaRetrieveHandler
    {
        public UpozelaRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}