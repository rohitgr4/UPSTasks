using Microsoft.AspNetCore.Mvc;
using UserListAPI.Domain;

namespace UserListAPI
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {        
        private static readonly List<Users> Users = new List<Users>
        {
            new Users { UserId = 1, UserName = "Albert Miguel", UserEmail = "albert.miguel@example.com" },
            new Users { UserId = 2, UserName = "Jona", UserEmail = "jane.smith@example.com" },
            new Users { UserId = 3, UserName = "Michael Johnson", UserEmail = "michael.johnson@example.com" },
            new Users { UserId = 4, UserName = "Emily Ross", UserEmail = "emily.ross@example.com" },            
        };

        [HttpGet]        
        public ActionResult<IEnumerable<Users>> GetUsers()
        {
            return Users;
        }
    }

}
