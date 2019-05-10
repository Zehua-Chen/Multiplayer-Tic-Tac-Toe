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
        public ActionResult<CreateGameResponse> Create(
            [FromBody]
            CreateGameRequest request
        )
        {
            if (request == null)
            {
                _logger.LogError("Request is null");

                return new CreateGameResponse
                {
                    Success = false,
                    Message = "Request is null"
                };
            }

            if (_gameService.HasSession)
            {
                return new CreateGameResponse
                {
                    Success = false,
                    Message = "Already have a game in session"
                };
            }

            _gameService.Create(request);
            _logger.LogInformation($"Created game board of size {request.Size}");
            
            return new CreateGameResponse
            {
                Success = true,
            };
        }
    }
}
