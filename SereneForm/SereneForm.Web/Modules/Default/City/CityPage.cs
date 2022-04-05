using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Default.Pages
{

    [PageAuthorize(typeof(CityRow))]

    public class CityController : Controller
    {
        [Route("Default/City")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/City/CityIndex.cshtml");
        }
    }
}