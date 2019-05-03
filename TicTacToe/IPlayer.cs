namespace TicTacToe
{
    public interface IPlayer
    {
        Session Session { get; set; }
        int Value { get; set; }
    }
    
    public static class IPlayerExtension
    {
        public static void MakeMove(this IPlayer player, uint y, uint x)
        {
            player.Session.Move(y, x, player.Value);
        }
    }
}