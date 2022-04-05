using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Default.CityRow>;
using MyRow = SereneForm.Default.CityRow;

namespace SereneForm.Default
{
    public interface ICityRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CityRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICityRetrieveHandler
    {
        public CityRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}