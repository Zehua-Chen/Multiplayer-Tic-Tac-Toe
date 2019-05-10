using System;
using TicTacToe;

using TicTacToeServer.Models;

namespace TicTacToeServer.Services
{
    public interface IGameService
    {
        bool HasSession { get; }
        void Create(CreateGameRequest config);
        
        event EventHandler<Session> CreateNewSession;
    }
    
    public class GameService: IGameService
    {
        Session _session;
        
        public bool HasSession
        {
            get { return _session != null; }
        }
        
        public event EventHandler<Session> CreateNewSession;
        
        public GameService()
        {
        }
        
        public void Create(CreateGameRequest request)
        {
            _session = new Session();
            _session.Size = request.Size;
            
            this.CreateNewSession?.Invoke(this, _session);
        }
    }
}