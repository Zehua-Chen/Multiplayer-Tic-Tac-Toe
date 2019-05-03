using System;

namespace TicTacToe
{
    public class SessionInvalidMoveException: Exception
    {
        uint _y;
        uint _x;
        
        public SessionInvalidMoveException(uint y, uint x)
        {
            _y = y;
            _x = x;
        }
    }
    
    public class SessionAlreadyFullException: Exception
    {
        
    }
}