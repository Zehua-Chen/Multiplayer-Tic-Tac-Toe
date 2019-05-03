using System;
using System.Collections.Generic;

namespace TicTacToe
{
    public class Session 
    {
        internal Board _board;
        
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
            temp.Value = 0;
            
            return temp;
        }
    }
}