using System;

namespace TicTacToe
{
    public struct Board
    {
        public uint Dimension { get; private set; }
        public Cell[] Cells { get; private set; }
        
        public int Winner
        {
            get 
            {
                // Find horizontal winner
                
                for (uint y = 0; y < this.Dimension; y++)
                {
                    int sum = 0;
                    
                    for (uint x = 0; x < this.Dimension; x++)
                    {
                        sum += this[y, x];
                    }
                    
                    if (sum == this.Dimension * 1)
                    {
                        return 1;
                    }
                    else if (sum == this.Dimension * -1)
                    {
                        return -1;
                    }
                }
                
                // Find horizontal winner
                
                for (uint x = 0; x < this.Dimension; x++)
                {
                    int sum = 0;
                    
                    for (uint y = 0; y < this.Dimension; y++)
                    {
                        sum += this[y, x];
                    }
                    
                    if (sum == this.Dimension * 1)
                    {
                        return 1;
                    }
                    else if (sum == this.Dimension * -1)
                    {
                        return -1;
                    }
                }
                
                // Find bottom left to top right winner
                
                int diagnolSum = 0;
                
                for (uint i = 0; i < this.Dimension; i++)
                {
                    diagnolSum += this[i, i];
                }
                
                if (diagnolSum == this.Dimension * 1)
                {
                    return 1;
                }
                else if (diagnolSum == this.Dimension * -1)
                {
                    return -1;
                }
                
                // Find top left to bottom right winner
                
                diagnolSum = 0;
                
                for (uint i = this.Dimension - 1; i >= 0; i--)
                {
                    diagnolSum += this[i, i];
                }
                
                if (diagnolSum == this.Dimension * 1)
                {
                    return 1;
                }
                else if (diagnolSum == this.Dimension * -1)
                {
                    return -1;
                }
                
                return 0;
            }
        }
        
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
        
        private uint LinearIndex(uint y, uint x)
        {
            return y + x * this.Dimension;
        }
    }
}
