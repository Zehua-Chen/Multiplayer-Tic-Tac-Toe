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
        /// Dimension (height and width) of the board
        /// </summary>
        /// <value>the dimension</value>
        public int Dimension { get; private set; }
        
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
                
                for (int y = 0; y < this.Dimension; y++)
                {
                    int sum = 0;
                    
                    for (int x = 0; x < this.Dimension; x++)
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
                
                for (int x = 0; x < this.Dimension; x++)
                {
                    int sum = 0;
                    
                    for (int y = 0; y < this.Dimension; y++)
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
                
                for (int i = 0; i < this.Dimension; i++)
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
                
                for (int i = this.Dimension - 1; i >= 0; i--)
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
        
        /// <summary>
        /// Create a board using a dimension
        /// </summary>
        /// <param name="dimension">
        /// the dimension to create the board with
        /// </param>
        public Board(int dimension)
        {
            this.Dimension = dimension;
            this.Cells = new Cell[this.Dimension * this.Dimension];
            
            for (int i = 0; i < this.Dimension * this.Dimension; i++)
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
            return y * this.Dimension + x;
        }
    }
}
