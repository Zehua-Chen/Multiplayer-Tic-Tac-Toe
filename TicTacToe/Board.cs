using System;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("TicTacToeTests")]
namespace TicTacToe
{
    /// <summary>
    /// Board of the tic tac toe game
    /// </summary>
    internal struct Board
    {
        /// <summary>
        /// Size (height and width) of the board
        /// </summary>
        /// <value>the size</value>
        public int Size { get; private set; }
        
        /// <summary>
        /// The 1d array that holds the cells
        /// </summary>
        /// <value>an array that holds the cells</value>
        public Cell[] Cells { get; private set; }
        
        /// <summary>
        /// Winner of the game
        /// </summary>
        /// <value>1 or -1 if there is winner, 0 if there is no winner</value>
        public int Winner
        {
            get 
            {
                // Find horizontal winner
                
                for (int y = 0; y < this.Size; y++)
                {
                    int sum = 0;
                    
                    for (int x = 0; x < this.Size; x++)
                    {
                        sum += this[y, x];
                    }
                    
                    if (sum == this.Size * 1)
                    {
                        return 1;
                    }
                    else if (sum == this.Size * -1)
                    {
                        return -1;
                    }
                }
                
                // Find horizontal winner
                
                for (int x = 0; x < this.Size; x++)
                {
                    int sum = 0;
                    
                    for (int y = 0; y < this.Size; y++)
                    {
                        sum += this[y, x];
                    }
                    
                    if (sum == this.Size * 1)
                    {
                        return 1;
                    }
                    else if (sum == this.Size * -1)
                    {
                        return -1;
                    }
                }
                
                // Find bottom left to top right winner
                
                int diagnolSum = 0;
                
                for (int i = 0; i < this.Size; i++)
                {
                    diagnolSum += this[i, i];
                }
                
                if (diagnolSum == this.Size * 1)
                {
                    return 1;
                }
                else if (diagnolSum == this.Size * -1)
                {
                    return -1;
                }
                
                // Find top left to bottom right winner
                
                diagnolSum = 0;
                
                for (int i = this.Size - 1; i >= 0; i--)
                {
                    diagnolSum += this[i, i];
                }
                
                if (diagnolSum == this.Size * 1)
                {
                    return 1;
                }
                else if (diagnolSum == this.Size * -1)
                {
                    return -1;
                }
                
                return 0;
            }
        }
        
        /// <summary>
        /// Create a board using a size
        /// </summary>
        /// <param name="size">
        /// the size to create the board with
        /// </param>
        public Board(int size)
        {
            this.Size = size;
            this.Cells = new Cell[this.Size * this.Size];
            
            for (int i = 0; i < this.Size * this.Size; i++)
            {
                this.Cells[i].Occupant = 0;
            }
        }
        
        /// <summary>
        /// Access the value of the occupant at a location
        /// </summary>
        /// <value>the occupant of a cell</value>
        public int this[int y, int x]
        {
            get { return this.Cells[LinearIndex(y, x)].Occupant; }
            set { this.Cells[LinearIndex(y, x)].Occupant = value; }
        }
        
        /// <summary>
        /// Compute the 1d index from the 2d location
        /// </summary>
        /// <param name="y">y</param>
        /// <param name="x">x</param>
        /// <returns>1d index</returns>
        private int LinearIndex(int y, int x)
        {
            return y * this.Size + x;
        }
    }
}
