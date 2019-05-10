using System.Text;
using System.Threading.Tasks;
using System;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace TicTacToeServer.Tests
{
    public static class HttpClientExtension
    {
        public static async Task<HttpResponseMessage> PostAsync(
            this HttpClient client, 
            string path, 
            object data
        )
        {
            StringContent content = new StringContent(
                ToJson(data),
                Encoding.UTF8,
                "application/json");

            Console.WriteLine(await content.ReadAsStringAsync());

            return await client.PostAsync(path, content);
        }

        private static string ToJson(object obj)
        {
            DefaultContractResolver resolver = new DefaultContractResolver
            {
                NamingStrategy = new CamelCaseNamingStrategy()
            };

            return JsonConvert.SerializeObject(obj, new JsonSerializerSettings
            {
                ContractResolver = resolver,
            });
        }
    }
}