using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Admission.Pages
{

    [PageAuthorize(typeof(GalsRow))]
    public class GalsController : Controller
    {
        [Route("Admission/Gals")]
        public ActionResult Index()
        {
            return View("~/Modules/Admission/Gals/GalsIndex.cshtml");
        }
    }
}