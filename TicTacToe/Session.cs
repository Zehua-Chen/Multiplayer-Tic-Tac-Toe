using System;
using System.Collections.Generic;

namespace TicTacToe
{
    public class Session 
    {
        internal Board _board;
        
        private int _nextValue = -1;
        
        public string Winner
        {
            get { return null; }
        }
        
        public Session()
        {
            
        }
        
        public void ConfigureBoard(uint dimension)
        {
            _board = new Board(dimension);
        }
        
        public TPlayer CreatePlayer<TPlayer>()
            where TPlayer: IPlayer, new()
        {
            TPlayer temp = new TPlayer();
            temp.Session = this;
            temp.Value = _nextValue;
            
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
        
        public int this[uint y, uint x]
        {
            get { return _board[y, x]; }
        }
        
        internal void Move(uint y, uint x, int value)
        {
            if (_board[y, x] == 0)
            {
                _board[y, x] = value;
            }
            else
            {
                throw new SessionInvalidMoveException(y, x);
            }
        }
    }
}