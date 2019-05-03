using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace TicTacToeServer.Hubs
{
    class GameHub: Hub
    {
        public async Task BroadCast()
        {
            await Clients.All.SendAsync("received");
        }
    }
}