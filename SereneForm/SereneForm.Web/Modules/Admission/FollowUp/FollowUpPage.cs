using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Admission.Pages
{

    [PageAuthorize(typeof(FollowUpRow))]
    public class FollowUpController : Controller
    {
        [Route("Admission/FollowUp")]
        public ActionResult Index()
        {
            return View("~/Modules/Admission/FollowUp/FollowUpIndex.cshtml");
        }
    }
}