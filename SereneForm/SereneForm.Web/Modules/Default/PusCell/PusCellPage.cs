using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Default.Pages
{

    [PageAuthorize(typeof(PusCellRow))]
    public class PusCellController : Controller
    {
        [Route("Default/PusCell")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/PusCell/PusCellIndex.cshtml");
        }
    }
}