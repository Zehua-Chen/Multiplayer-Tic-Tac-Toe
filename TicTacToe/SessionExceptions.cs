using System;

namespace TicTacToe
{
    public class SessionInvalidMoveException: Exception
    {
        int _y;
        int _x;
        
        public SessionInvalidMoveException(int y, int x)
        {
            _y = y;
            _x = x;
        }
        
        public override string ToString()
        {
            return $"Cannot make move at (${_y}, ${_x})";
        }
    }
    
    public class SessionAlreadyFullException: Exception
    {
        public override string ToString() 
        {
            return "This session already have enough players";
        }
    }
}