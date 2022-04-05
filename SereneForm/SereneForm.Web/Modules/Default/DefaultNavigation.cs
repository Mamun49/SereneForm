using Serenity.Navigation;
using MyPages = SereneForm.Default.Pages;


[assembly: NavigationMenu(1000, "City", icon: "fa-anchor")]
[assembly: NavigationLink(1001, "City/City Form", typeof(MyPages.CityController), icon: null)]
[assembly: NavigationMenu(1002, "Country", icon: "fa-anchor")]
[assembly: NavigationLink(1003, "Country/Country Form", typeof(MyPages.CountryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Upozela", typeof(MyPages.UpozelaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Pus Cell", typeof(MyPages.PusCellController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Real Others", typeof(MyPages.RealOthersController), icon: null)]