﻿using BlizzardAPIExternalServices.Authorization;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace WoWToolsCore.Services.BlizzardAPIServices
{
    public class BlizzardAPIService : IBlizzardAPIService
    {
        private readonly String _clientId;
        private readonly String _clientSecret;
        private readonly IHttpClientFactory _clientFactory;

        private AccessToken _accessToken;

        public BlizzardAPIService(IHttpClientFactory clientFactory, string clientId, string clientSecret)
        {
            _clientFactory = clientFactory;
            _clientId = clientId;
            _clientSecret = clientSecret;
        }

        public string GetBlizzardAPICharacterInfoAsJson(Character character)
        {
            if (!ValidAccessToken())
            {
                _accessToken = GetValidAccessTokenFromBlizzard().Result;
            }


            var apiURL =
                String
                .Format(
                    "https://eu.api.blizzard.com/wow/character/{0}/{1}?locale=en_GB&access_token={2}",
                    character.Realm,
                    character.CharacterName,
                    _accessToken.Token);

            return
                GetBlizzardAPIInfoAsync(apiURL).Result;
        }

        public string GetBlizzardAPICharacterInfoAsJson(string field, Character character)
        {
            if (!ValidAccessToken())
            {
                _accessToken = GetValidAccessTokenFromBlizzard().Result;
            }


            var apiURL =
                String
                .Format(
                    "https://eu.api.blizzard.com/wow/character/{0}/{1}?fields={2}&locale=en_GB&access_token={3}",
                    character.Realm,
                    character.CharacterName,
                    field,
                    _accessToken.Token);

            return
                GetBlizzardAPIInfoAsync(apiURL).Result;
        }

        async Task<string> GetBlizzardAPIInfoAsync(string apiURL)
        {
            String blizzardAPIResponse = null;

            try
            {
                using (HttpClient httpClient = _clientFactory.CreateClient())
                {
                    HttpResponseMessage response = await httpClient.GetAsync(apiURL);
                    if (response.IsSuccessStatusCode)
                    {
                        blizzardAPIResponse = await response.Content.ReadAsStringAsync();
                    }
                    else
                    {
                        throw new HttpRequestException("The server could not be contacted");
                    }
                }
            }
            catch
            {
                throw;
            }

            return blizzardAPIResponse;
        }

        internal bool ValidAccessToken()
        {
            return _accessToken != null && _accessToken.Token != null && _accessToken.ExpiresAt != null && ((DateTime)_accessToken.ExpiresAt).AddMinutes(3) > DateTime.Now;
        }

        private async Task<AccessToken> GetValidAccessTokenFromBlizzard()
        {
            TokenResponse token = new TokenResponse();

            try
            {
                using (HttpClient httpClient = _clientFactory.CreateClient())
                {
                    string tokenRequestParameters;
                    var parameters = new Dictionary<string, string>()
                            {
                                { "client_id", _clientId },
                                { "client_secret", _clientSecret },
                                { "grant_type", "client_credentials" },
                            };

                    tokenRequestParameters = new FormUrlEncodedContent(parameters).ReadAsStringAsync().Result;
                    string apiURL = "https://eu.battle.net/oauth/token";

                    HttpContent content = new StringContent(tokenRequestParameters, Encoding.UTF8, "application/x-www-form-urlencoded");

                    HttpResponseMessage response = await httpClient.PostAsync(apiURL, content);
                    if (response.IsSuccessStatusCode)
                    {
                        token = JsonConvert
                                .DeserializeObject<TokenResponse>(await response.Content.ReadAsStringAsync());

                        return new AccessToken(token);
                    }
                    else
                    {
                        throw new HttpRequestException("The server could not be contacted");
                    }
                }
            }
            catch
            {
                throw;
            }
        }
    }
}
