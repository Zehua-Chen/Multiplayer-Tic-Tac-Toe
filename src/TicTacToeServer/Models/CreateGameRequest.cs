using Newtonsoft.Json;

namespace TicTacToeServer.Models
{
    public class CreateGameRequest
    {
        public string Username { get; set; }
        public string InvitationCode { get; set; }
        public int Size { get; set; }
    }
}