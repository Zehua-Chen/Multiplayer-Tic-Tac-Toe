using Xunit;
using TicTacToe;

namespace TicTacToe.Tests
{
    public class SessionTest
    {
        [Fact]
        public void TestRegistration()
        {
            Session session = new Session();
            
            session.ConfigureBoard(3);
            
            Player playerA = session.CreatePlayer<Player>();
            Player playerB = session.CreatePlayer<Player>();
            
            playerA.MakeMove(0, 0);
        }
    }
}