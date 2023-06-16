namespace Server.DTOs
{
    public class GetUserDTO
    {
        public string UserName { get; set; }
        public int Score { get; set; }
        public string PictureUrl { get; set; }
        public string? Token { get; set; }
    }
}