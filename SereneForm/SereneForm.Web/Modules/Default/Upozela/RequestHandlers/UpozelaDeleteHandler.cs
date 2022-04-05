using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = SereneForm.Default.UpozelaRow;

namespace SereneForm.Default
{
    public interface IUpozelaDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UpozelaDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUpozelaDeleteHandler
    {
        public UpozelaDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}