using System;
using Xunit;
using Microsoft.Extensions.Logging;

using TicTacToe;
using TicTacToeServer.Controllers;
using TicTacToeServer.Services;

namespace TicTacToeServer.Tests
{
    public class GameControllerTest
    {
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
            controller.Create(new Models.GameConfiguration{ Size=3 });
            
            Assert.NotNull(session);
            Assert.Equal(3, session.Size);
            
            Console.WriteLine(logger.ToString());
        }
    }
}
