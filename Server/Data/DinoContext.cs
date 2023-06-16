using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class DinoContext : IdentityDbContext<User>
    {
        public DinoContext(DbContextOptions options) : base(options)
        {
        }
    }
}