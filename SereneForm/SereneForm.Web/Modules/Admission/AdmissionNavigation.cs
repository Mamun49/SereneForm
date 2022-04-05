using Serenity.Navigation;
using MyPages = SereneForm.Admission.Pages;
[assembly: NavigationMenu(int.MaxValue, "Admission", icon: "fa-hospital-o")]
[assembly: NavigationLink(int.MaxValue, "Admission/Add Form", typeof(MyPages.AddFormController), icon: "fa-cube")]
//[assembly: NavigationLink(int.MaxValue, "Admission/Gals", typeof(MyPages.GalsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Admission/Investigation", typeof(MyPages.InvestigationController), icon: "fa-recycle")]
[assembly: NavigationLink(int.MaxValue, "Admission/Follow Up", typeof(MyPages.FollowUpController), icon: "fa-ambulance")] 