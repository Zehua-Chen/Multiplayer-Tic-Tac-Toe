using System;

namespace TicTacToe
{
    public struct Cell 
    {
        public int Occupant { get; set; }
        
        public Cell(int occupant)
        {
            this.Occupant = occupant;
        }
        
        public static implicit operator int(Cell cell)
        {
            return cell.Occupant;
        }
    }
}
