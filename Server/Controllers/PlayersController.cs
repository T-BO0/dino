using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DTOs;
using Server.Models;

namespace Server.Controllers
{
    public class PlayersController : BaseAPIController
    {
        private readonly UserManager<User> _userManager;

        public PlayersController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }


        [HttpGet("getAllThePlayers")]
        public async Task<ActionResult<List<PlayerDTO>>> GetAllThePlayers()
        {
            var players = new List<PlayerDTO>();
            var users = await _userManager.Users.ToListAsync();

            foreach(var user in users)
            {
                var player = new PlayerDTO
                {
                    UserName = user.UserName,
                    PictureUrl = user.PictureUrl,
                    Score = user.Score,
                };

                players.Add(player);
            }

            players = players.OrderByDescending(player => player.Score).ToList();

            return players;
        }


        [HttpPut("updateScore"), Authorize]
        public async Task<ActionResult> UpdatePlayerSocre(int score)
        {
            var user = await _userManager.FindByNameAsync(User.Identity!.Name);
            if(score <= user.Score)
                return Ok("no update needed");
            
            user.Score = score;

            await _userManager.UpdateAsync(user);
            return Ok("score updated");
        }
    }
}