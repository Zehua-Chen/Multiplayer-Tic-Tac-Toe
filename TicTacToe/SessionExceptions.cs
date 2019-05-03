using System;

namespace TicTacToe
{
    /// <summary>
    /// Exception thrown when a move is invalid
    /// </summary>
    public class SessionInvalidMoveException: Exception
    {
        int _y;
        int _x;
        
        /// <summary>
        /// Create an invalid move exception
        /// </summary>
        /// <param name="y">the invalid y</param>
        /// <param name="x">the invalid y</param>
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
    
    /// <summary>
    /// Exception thrown when the game session is already full
    /// </summary>
    public class SessionAlreadyFullException: Exception
    {
        public override string ToString() 
        {
            return "This session already have enough players";
        }
    }
}