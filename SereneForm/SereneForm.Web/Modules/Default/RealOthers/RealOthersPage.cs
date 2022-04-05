using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Default.Pages
{

    [PageAuthorize(typeof(RealOthersRow))]
    public class RealOthersController : Controller
    {
        [Route("Default/RealOthers")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/RealOthers/RealOthersIndex.cshtml");
        }
    }
}