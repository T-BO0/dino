using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;
using Server.Models;
using Server.Services;

namespace Server.Controllers
{
    public class AutController : BaseAPIController
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;

        public AutController(UserManager<User> userManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(UserDTO userDTO)
        {
            var exUser = await _userManager.FindByNameAsync(userDTO.UserName);
            if(exUser is not null)
                return BadRequest(new ProblemDetails{ Title = "username is taken"});

            var user = new User
            {
                UserName = userDTO.UserName
            };

            var result = await _userManager.CreateAsync(user, userDTO.Password);

            if(!result.Succeeded)
            {
                foreach(var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                
                return ValidationProblem();
            }

            return StatusCode(201);
        }


        [HttpPost("login")]
        public async Task<ActionResult<GetUserDTO>> Login(UserDTO userDTO)
        {
            var user = await _userManager.FindByNameAsync(userDTO.UserName);
            if(user == null || !await _userManager.CheckPasswordAsync(user, userDTO.Password))
                return Unauthorized();
            var token = _tokenService.GenerateToken(user);

            return new GetUserDTO
            {
                UserName = user.UserName,
                Score = user.Score,

                Token = token,
            };
        }


        [HttpGet("getCurrentUser"), Authorize]
        public async Task<ActionResult<GetUserDTO>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.Identity!.Name);
            var token = _tokenService.GenerateToken(user);

            return new GetUserDTO
            {
                UserName = user.UserName,
                Score = user.Score,
                PictureUrl = user.PictureUrl,
                Token = token
            };
        }
    }
}