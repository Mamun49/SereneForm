using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Registration.FormRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Registration.FormRow;

namespace SereneForm.Registration
{
    public interface IFormSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class FormSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IFormSaveHandler
    {
        public FormSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}