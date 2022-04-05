using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<SereneForm.Admission.AddFormRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = SereneForm.Admission.AddFormRow;

namespace SereneForm.Admission
{
    public interface IAddFormSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AddFormSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAddFormSaveHandler
    {
        public AddFormSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}