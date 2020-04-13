using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WoWTimeOptimisation.Models;
using WoWTimeOptimisation.Services;
using WoWTimeOptimisation.Services.GameDataRetrieval;

namespace WoWTimeOptimisation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlyingController : ControllerBase
    {
        private IAchievementRepository _achievementRepository;
        private ICharacterAchievementRepository _characterAchievementRepository;
        private IAchievementsService _achievementsService;

        public FlyingController(
            IAchievementRepository achievementRepository,
            ICharacterAchievementRepository characterAchievementRepository)
        {
            _achievementRepository = achievementRepository;
            _characterAchievementRepository = characterAchievementRepository;
            _achievementsService = new AchievementsService(_achievementRepository);
        }

        // GET: api/Flying
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "BFA" };
        }

        // GET: api/Flying/{Expansion}
        [HttpGet("{expansion}/{faction?}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetStages(string expansion, int faction = 0)
        {
            string category = "flying";
            var achievementStages = _achievementsService.GetStages(category, expansion, faction);
            
            return Ok(achievementStages);
        }

        // GET: api/Flying/{Expansion}/{Realm}/{Character}
        [HttpGet("{expansion}/{realm}/{character}")]
        public ActionResult GetCharacterProgress(string expansion, string realm, string character)
        {
            int blizzardId = _characterAchievementRepository.GetBlizzardIdForCharacter("", realm, character);
            string category = "flying";
            string goal = _achievementRepository.GetGoalKey(category, expansion);
            IEnumerable<int> achievements = _achievementRepository.GetAchievementsByGoal(goal);

            var characterSteps = new List<CharacterStage>();

            foreach (int achievement in achievements)
            {
                characterSteps.AddRange(_characterAchievementRepository.GetCharacterStagesForAchievement(achievement, blizzardId));
            }

            var characterProgress = new CharacterStatus
            {
                CharacterName = character,
                CharacterSteps = characterSteps
            };

            return Ok(characterProgress);
        }
    }
}
