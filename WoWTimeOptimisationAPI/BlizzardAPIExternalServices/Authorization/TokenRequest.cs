namespace BlizzardAPIExternalServices.Authorization
{
#pragma warning disable IDE1006 // Naming Styles
    public class TokenRequest
    {
        public string clientid {get; set; }
        public string clientsecret {get; set; }
        public string grant_type {get; set; }
    }
#pragma warning restore IDE1006 // Naming Styles
}
