using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Admission.Pages
{

    [PageAuthorize(typeof(AddFormRow))]
    public class AddFormController : Controller
    {
        [Route("Admission/AddForm")]
        public ActionResult Index()
        {
            return View("~/Modules/Admission/AddForm/AddFormIndex.cshtml");
        }
    }
}