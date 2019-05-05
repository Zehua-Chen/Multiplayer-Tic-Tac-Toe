using System;
using System.Collections.Generic;

namespace TicTacToe
{
    /// <summary>
    /// A tic tac toe game session
    /// </summary>
    public class Session
    {
        internal Board _board;
        
        private int _nextValue = -1;
        private Dictionary<int, Player> _valuesToPlayers = new Dictionary<int, Player>();
        
        /// <summary>
        /// Width and height of the game
        /// </summary>
        /// <value></value>
        public int Size
        {
            get { return _board.Size; }
            set 
            {
                _board = new Board(value);
            }
        }
        
        /// <summary>
        /// Fired when there is a winner
        /// </summary>
        public event EventHandler<Player> HasWinner;
        
        /// <summary>
        /// Fired when a player has made a move
        /// </summary>
        public event EventHandler<Location> MovementMade;
        
        /// <summary>
        /// Create a player
        /// </summary>
        /// <typeparam name="TPlayer">
        /// the type used to represent the player
        /// </typeparam>
        /// <returns>the created player</returns>
        public TPlayer CreatePlayer<TPlayer>()
            where TPlayer: Player, new()
        {
            TPlayer temp = new TPlayer();
            temp.Session = this;
            temp.Value = _nextValue;
            
            _valuesToPlayers.Add(_nextValue, temp);
            
            switch (_nextValue)
            {
                case -1:
                    _nextValue = 1;
                    break;
                case 1:
                    _nextValue = 2;
                    break;
                case 2:
                default:
                    throw new SessionAlreadyFullException();
            }
            
            
            return temp;
        }
        
        /// <summary>
        /// Access the value at a point in the board
        /// </summary>
        /// <value>the value held by the board at (y, x)</value>
        public int this[int y, int x]
        {
            get { return _board[y, x]; }
        }
        
        // Private, internal methods
        
        /// <summary>
        /// Make a move
        /// </summary>
        /// <param name="y">the y component of the move</param>
        /// <param name="x">the x component of the move</param>
        /// <param name="value">the value that represents the move</param>
        internal void Move(int y, int x, int value)
        {
            if (_board[y, x] == 0)
            {
                _board[y, x] = value;
                this.MovementMade?.Invoke(this, new Location
                {
                    Y = y,
                    X = x,
                });
            }
            else
            {
                throw new SessionInvalidMoveException(y, x);
            }
            
            int winnerValue = _board.Winner;
            
            if (winnerValue != 0)
            {
                this.HasWinner?.Invoke(this, _valuesToPlayers[winnerValue]);
            }
        }
    }
}