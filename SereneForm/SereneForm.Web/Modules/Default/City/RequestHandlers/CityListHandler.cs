using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<SereneForm.Default.CityRow>;
using MyRow = SereneForm.Default.CityRow;

namespace SereneForm.Default
{
    public interface ICityListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CityListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICityListHandler
    {
        public CityListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}