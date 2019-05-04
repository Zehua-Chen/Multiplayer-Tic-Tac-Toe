using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using TicTacToeServer.Models;
using TicTacToeServer.Services;

namespace TicTacToeServer.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        IGameService _gameService;
        
        public GameController(IGameService gameSerivce)
        {
            _gameService = gameSerivce;
        }
        
        [HttpPost("create")]
        public void Create(
            [FromBody]
            GameConfiguration gameConfig
        )
        {
            _gameService.Create(gameConfig);
        }
        
        [HttpGet("shit")]
        public ActionResult<GameConfiguration> GetShit()
        {
            return new GameConfiguration{ Size = 12 };
        }
    }
}
