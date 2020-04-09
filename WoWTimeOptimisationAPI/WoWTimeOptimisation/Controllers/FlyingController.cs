using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WoWTimeOptimisation.Models;
using WoWTimeOptimisation.Services;

namespace WoWTimeOptimisation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlyingController : ControllerBase
    {
        private IAchievementRepository _achievementRepository;
        private ICharacterAchievementRepository _characterAchievementRepository;

        public FlyingController(
            IAchievementRepository achievementRepository,
            ICharacterAchievementRepository characterAchievementRepository)
        {
            _achievementRepository = achievementRepository;
            _characterAchievementRepository = characterAchievementRepository;
        }

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
            string category = "flying";
            string goal = _achievementRepository.GetGoalKey(category, expansion);
            IEnumerable<int> achievements = _achievementRepository.GetAchievementsByGoal(goal);

            var achievementStages = new List<AchievementStatus>();
            foreach (int achievement in achievements)
            {
                var achievementName = _achievementRepository.GetAchievementName(achievement);
                var stages = _achievementRepository.GetStagesForAchievement(achievement);
                achievementStages.Add(
                    new AchievementStatus
                    {
                        Achievement = achievementName,
                        Stages = stages
                    }); ;
            }

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
