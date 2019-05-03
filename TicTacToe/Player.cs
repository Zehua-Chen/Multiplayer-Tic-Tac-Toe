namespace TicTacToe
{
    public class Player: IPlayer
    {
        public Session Session { get; set; }
        public int Value { get; set; }
    }
}