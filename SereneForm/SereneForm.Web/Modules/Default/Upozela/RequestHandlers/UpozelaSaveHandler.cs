using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Default.UpozelaRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Default.UpozelaRow;

namespace SereneForm.Default
{
    public interface IUpozelaSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UpozelaSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUpozelaSaveHandler
    {
        public UpozelaSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}