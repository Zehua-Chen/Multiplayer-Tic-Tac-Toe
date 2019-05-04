using System;
using TicTacToe;

using TicTacToeServer.Models;

namespace TicTacToeServer.Services
{
    public interface IGameService
    {
        void Create(GameConfiguration config);
    }
    
    public class GameService: IGameService
    {
        Session _session = new Session();
        
        public GameService()
        {
        }
        
        public void Create(GameConfiguration config)
        {
            Console.WriteLine($"create game of size {config.Size}");
            _session.Size = config.Size;
        }
    }
}