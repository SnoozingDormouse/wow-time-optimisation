using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WoWTimeOptimisation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlyingController : ControllerBase
    {
        // GET: api/Flying
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Flying/5 <-- this will be the characterId in the database (use Blizzard's CharacterId's)
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
    }
}
