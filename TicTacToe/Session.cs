using System;
using System.Collections.Generic;

namespace TicTacToe
{
    public class Session
    {
        internal Board _board;
        
        private int _nextValue = -1;
        private Dictionary<int, Player> _valuesToPlayers = new Dictionary<int, Player>();
        
        public event EventHandler<Player> HasWinner;
        public event EventHandler<(int, int)> MovementMade;
        
        public void ConfigureBoard(int dimension)
        {
            _board = new Board(dimension);
        }
        
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
        
        public int this[int y, int x]
        {
            get { return _board[y, x]; }
        }
        
        // Private, internal methods
        
        internal void Move(int y, int x, int value)
        {
            if (_board[y, x] == 0)
            {
                _board[y, x] = value;
                this.MovementMade?.Invoke(this, (y, x));
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