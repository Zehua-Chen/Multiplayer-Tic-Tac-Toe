namespace TicTacToe
{
    public class Player
    {
        public Session Session { get; set; }
        public int Value { get; set; }
        
        public void MakeMove(int y, int x)
        {
            this.Session.Move(y, x, this.Value);
        }
    }
}