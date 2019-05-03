using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TicTacToeServer.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        [HttpGet("message")]
        public string Message()
        {
            return "ass";
        }
    }
}
