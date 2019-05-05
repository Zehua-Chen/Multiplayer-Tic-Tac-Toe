namespace TicTacToe
{
    /// <summary>
    /// Player of the tic tac toe game
    /// </summary>
    public class Player
    {
        /// <summary>
        /// The game session the player is associated with
        /// </summary>
        /// <value>the session</value>
        public Session Session { get; set; }
        
        /// <summary>
        /// The value that is written to the board of the game
        /// </summary>
        /// <value>the value associated with the player</value>
        public int Value { get; set; }
        
        /// <summary>
        /// Make a move at a specified location
        /// </summary>
        /// <param name="y">y component of the move</param>
        /// <param name="x">x component of the move</param>
        public void MakeMove(int y, int x)
        {
            this.Session.Move(y, x, this.Value);
        }
    }
}