using System;

namespace TicTacToe
{
    public struct Board
    {
        public uint Dimension { get; private set; }
        public Cell[] Cells { get; private set; }
        
        public Board(uint dimension)
        {
            this.Dimension = dimension;
            this.Cells = new Cell[this.Dimension * this.Dimension];
            
            for (int i = 0; i < this.Dimension; i++)
            {
                this.Cells[i].Occupant = 0;
            }
        }
        
        public int this[uint y, uint x]
        {
            get { return this.Cells[LinearIndex(y, x)].Occupant; }
            set { this.Cells[LinearIndex(y, x)].Occupant = value; }
        }
        
        public void Set(uint y, uint x, int value)
        {
            this.Cells[LinearIndex(y, x)].Occupant = value;
        }
        
        private uint LinearIndex(uint y, uint x)
        {
            return y + x * this.Dimension;
        }
    }
}
