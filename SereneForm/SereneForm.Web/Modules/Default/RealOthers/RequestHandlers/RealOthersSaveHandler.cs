using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Default.RealOthersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Default.RealOthersRow;

namespace SereneForm.Default
{
    public interface IRealOthersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class RealOthersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRealOthersSaveHandler
    {
        public RealOthersSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}