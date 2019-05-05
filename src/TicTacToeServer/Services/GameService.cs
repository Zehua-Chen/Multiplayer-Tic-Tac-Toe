using System;
using TicTacToe;

using TicTacToeServer.Models;

namespace TicTacToeServer.Services
{
    public interface IGameService
    {
        void Create(GameConfiguration config);
        
        event EventHandler<Session> CreateNewSession;
    }
    
    public class GameService: IGameService
    {
        Session _session;
        
        public event EventHandler<Session> CreateNewSession;
        
        public GameService()
        {
        }
        
        public void Create(GameConfiguration config)
        {
            _session = new Session();
            _session.Size = config.Size;
            
            this.CreateNewSession?.Invoke(this, _session);
        }
    }
}