using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace SereneForm.Registration.Pages
{

    [PageAuthorize(typeof(FormRow))]
    public class FormController : Controller
    {
        [Route("Registration/Form")]
        public ActionResult Index()
        {
            return View("~/Modules/Registration/Form/FormIndex.cshtml");
        }
    }
}