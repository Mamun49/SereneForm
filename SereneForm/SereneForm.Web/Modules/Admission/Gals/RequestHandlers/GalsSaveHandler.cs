using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Admission.GalsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Admission.GalsRow;

namespace SereneForm.Admission
{
    public interface IGalsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class GalsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGalsSaveHandler
    {
        public GalsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}