using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Default.Pages
{

    [PageAuthorize(typeof(CountryRow))]
    public class CountryController : Controller
    {
        [Route("Default/Country")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Country/CountryIndex.cshtml");
        }
    }
}