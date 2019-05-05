using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

using TicTacToeServer.Models;
using TicTacToeServer.Services;

namespace TicTacToeServer.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        IGameService _gameService;
        ILogger<GameController> _logger;
        
        public GameController(
            IGameService gameSerivce, 
            ILogger<GameController> logger
        )
        {
            _gameService = gameSerivce;
            _logger = logger;
        }
        
        [HttpPost("create")]
        public void Create(
            [FromBody]
            GameConfiguration gameConfig
        )
        {
            _gameService.Create(gameConfig);
            _logger.LogInformation($"Created game board of size {gameConfig.Size}");
        }
    }
}
