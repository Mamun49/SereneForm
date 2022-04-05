using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Admission.Pages
{

    [PageAuthorize(typeof(InvestigationRow))]
    public class InvestigationController : Controller
    {
        [Route("Admission/Investigation")]
        public ActionResult Index()
        {
            return View("~/Modules/Admission/Investigation/InvestigationIndex.cshtml");
        }
    }
}