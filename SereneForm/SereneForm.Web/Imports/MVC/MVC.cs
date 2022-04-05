
namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Admission
        {
            public static class AddForm
            {
                public const string AddFormIndex = "~/Modules/Admission/AddForm/AddFormIndex.cshtml";
            }

            public static class FollowUp
            {
                public const string FollowUpIndex = "~/Modules/Admission/FollowUp/FollowUpIndex.cshtml";
            }

            public static class Gals
            {
                public const string GalsIndex = "~/Modules/Admission/Gals/GalsIndex.cshtml";
            }

            public static class Investigation
            {
                public const string InvestigationIndex = "~/Modules/Admission/Investigation/InvestigationIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

        }

        public static class Default
        {
            public static class City
            {
                public const string CityIndex = "~/Modules/Default/City/CityIndex.cshtml";
            }

            public static class Country
            {
                public const string CountryIndex = "~/Modules/Default/Country/CountryIndex.cshtml";
            }

            public static class PusCell
            {
                public const string PusCellIndex = "~/Modules/Default/PusCell/PusCellIndex.cshtml";
            }

            public static class RealOthers
            {
                public const string RealOthersIndex = "~/Modules/Default/RealOthers/RealOthersIndex.cshtml";
            }

            public static class Upozela
            {
                public const string UpozelaIndex = "~/Modules/Default/Upozela/UpozelaIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                }
            }

        }

        public static class Registration
        {
            public static class Form
            {
                public const string FormIndex = "~/Modules/Registration/Form/FormIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _Sidebar = "~/Views/Shared/_Sidebar.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
        }

    }
}
