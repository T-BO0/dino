using Microsoft.AspNetCore.Identity;

namespace Server.Models
{
    public class User : IdentityUser
    {
        public string PictureUrl { get; set; } = "https://www.dlsu.edu.ph/wp-content/uploads/2022/08/anonymous.png";
        public int Score { get; set; } = 0;
    }
}