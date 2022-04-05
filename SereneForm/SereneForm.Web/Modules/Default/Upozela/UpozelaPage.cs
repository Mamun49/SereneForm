using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Default.Pages
{

    [PageAuthorize(typeof(UpozelaRow))]
    public class UpozelaController : Controller
    {
        [Route("Default/Upozela")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Upozela/UpozelaIndex.cshtml");
        }
    }
}