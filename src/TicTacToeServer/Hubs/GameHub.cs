using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

using TicTacToe;
using TicTacToeServer.Services;

namespace TicTacToeServer.Hubs
{
    class GameHub: Hub
    {   
        IGameService _service;
        
        public GameHub(IGameService service)
        {
            _service = service;
            _service.CreateNewSession += this.OnCreateNewSession;
        }
        
        public async void OnCreateNewSession(object sender, Session session)
        {
            await Clients.All.SendAsync("createSession");
        }
    }
}