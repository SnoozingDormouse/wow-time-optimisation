using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WoWTimeOptimisation.Models;

namespace WoWTimeOptimisation.Services.GameDataRetrieval
{
    public class AchievementsService : IAchievementsService
    {
        IAchievementRepository _achievementRepository;

        public AchievementsService(
            IAchievementRepository achievementRepository)
        {
            _achievementRepository = achievementRepository;
        }

        public IEnumerable<AchievementStatus> GetStages(string category, string expansion, int faction = 0)
        {
            var achievementStages = new List<AchievementStatus>();

            string goal = _achievementRepository.GetGoalKey(category, expansion);
            IEnumerable<int> achievements = _achievementRepository.GetAchievementsByGoal(goal);

            foreach (int achievement in achievements)
            {
                achievementStages.AddRange(AddCriteriaToAchievementStages(achievement, faction));
            }

            return achievementStages;
        }

        private IEnumerable<AchievementStatus> AddCriteriaToAchievementStages(int achievementId, int faction)
        {
            var achievementStages = new List<AchievementStatus>();

            var achievementName = _achievementRepository.GetAchievementName(achievementId);
            var opposingFaction = GetOpposingFaction(faction);

            IEnumerable<Stage> stages = _achievementRepository.GetStagesForAchievement(achievementId).Where(s => s.Faction != opposingFaction);

            achievementStages.Add(
                new AchievementStatus
                {
                    Achievement = achievementName,
                    Stages = stages
                });

            // if any of the stages has an AchievementId these also must be included
            var SubAchievements =
                stages
                .Where(s => s.AchievementId != null)
                .Select(s => s.AchievementId);

            foreach (int subAchievementId in SubAchievements)
            {
                achievementStages.AddRange(AddCriteriaToAchievementStages((int)subAchievementId, faction));
            };

            return achievementStages;
        }

        private int GetOpposingFaction(int faction)
        {
            switch (faction)
            {
                case (int)PlayerFaction.Horde:
                    return (int)PlayerFaction.Alliance;

                case (int)PlayerFaction.Alliance:
                    return (int)PlayerFaction.Horde;

                default:
                    return faction;
            }
        }
    }
}
