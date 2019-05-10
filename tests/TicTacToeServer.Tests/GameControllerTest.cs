using System;
using System.Threading.Tasks;
using System.Net.Http;
using System.Text;
using Xunit;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

using TicTacToe;
using TicTacToeServer.Controllers;
using TicTacToeServer.Services;
using TicTacToeServer.Models;

namespace TicTacToeServer.Tests
{
    public class GameControllerTest: IClassFixture<WebApplicationFactory<Startup>>
    {
        private readonly WebApplicationFactory<Startup> _factory;

        public GameControllerTest(WebApplicationFactory<Startup> factory)
        {
            _factory = factory;
        }

        [Fact]
        public async Task TestCreateGameHttp()
        {
            var client = _factory.CreateClient();
            CreateGameRequest request = new CreateGameRequest
            {
                Size = 10,
                Username = "abc",
                InvitationCode = "abc1"
            };

            var response = await client.PostAsync("/api/game/create", request);
        }

        [Fact]
        public void TestCreateGame()
        {
            LoggerFactory factory = new LoggerFactory();
            Logger<GameController> logger = new Logger<GameController>(factory);
            
            GameService service = new GameService();
            Session session = null;
            service.CreateNewSession += (sender, s) => 
            {
                session = s;
            };
            
            GameController controller = new GameController(service, logger);
            controller.Create(new Models.CreateGameRequest{ Size=3 });
            
            Assert.NotNull(session);
            Assert.Equal(3, session.Size);
            
            Console.WriteLine(logger.ToString());
        }
    }
}
