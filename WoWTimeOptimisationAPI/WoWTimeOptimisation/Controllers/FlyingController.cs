using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WoWTimeOptimisation.Models;

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
            return new string[] { "BFA" };
        }

        // GET: api/Flying/{Expansion}
        [HttpGet("{expansion}", Name = "Get")]
        public ActionResult GetStages(string expansion)
        {
            var stages = new List<Stage>
            {
                new Stage
                {
                    Id = 0,
                    Name = "Test 1 - from API",
                    Type = 0
                },

                new Stage
                {
                    Id = 1,
                    Name = "Test 2 - from API",
                    Type = 0
                },

                new Stage
                {
                    Id = 2,
                    Name = "Test 3 - from API",
                    Type = 0
                }
            };

            return Ok(stages);
        }
    }
}
