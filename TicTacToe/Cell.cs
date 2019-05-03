using System;

namespace TicTacToe
{
    /// <summary>
    /// A cell inside the tic tac toe board
    /// </summary>
    public struct Cell 
    {
        /// <summary>
        /// Value held by the cell
        /// </summary>
        /// <value>1 or -1 if there is player, 0 if nothing</value>
        public int Occupant { get; set; }
        
        /// <summary>
        /// Create a cell using a speicified value
        /// </summary>
        /// <param name="occupant"></param>
        public Cell(int occupant)
        {
            this.Occupant = occupant;
        }
        
        /// <summary>
        /// Convert cell to int
        /// </summary>
        /// <param name="cell">the cell</param>
        public static implicit operator int(Cell cell)
        {
            return cell.Occupant;
        }
    }
}
