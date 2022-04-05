using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<SereneForm.Default.CountryRow>;
using MyRow = SereneForm.Default.CountryRow;

namespace SereneForm.Default
{
    public interface ICountryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CountryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICountryRetrieveHandler
    {
        public CountryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}