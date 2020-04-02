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
        [HttpGet("{expansion}")]
        public ActionResult GetStages(string expansion)
        {
            var stages = new List<Stage>
            {
                new Stage
                {
                    CriteriaId = 0,
                    Name = "Test 1 - from API",
                    Type = 0
                },

                new Stage
                {
                    CriteriaId = 1,
                    Name = "Test 2 - from API",
                    Type = 0
                },

                new Stage
                {
                    CriteriaId = 2,
                    Name = "Test 3 - from API",
                    Type = 0
                }
            };

            return Ok(stages);
        }

        // GET: api/Flying/{Expansion}/{Realm}/{Character}
        [HttpGet("{expansion}/{realm}/{character}")]
        public ActionResult GetCharacterProgress(string expansion, string realm, string character)
        {
            var characterProgress = new CharacterStatus
            {
                CharacterName = character,
                CharacterSteps = new List<CharacterStage>
                {
                    new CharacterStage
                    {
                        CriteriaId = 0,
                        Amount = 999,
                        IsComplete = true
                    },
                    new CharacterStage
                    {
                        CriteriaId = 1,
                        Amount = 0,
                        IsComplete = false
                    }
                }
            };

            return Ok(characterProgress);
        }
    }
}
