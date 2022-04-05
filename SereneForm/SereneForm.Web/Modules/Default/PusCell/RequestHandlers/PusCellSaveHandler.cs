using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Default.PusCellRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Default.PusCellRow;

namespace SereneForm.Default
{
    public interface IPusCellSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PusCellSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPusCellSaveHandler
    {
        public PusCellSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}