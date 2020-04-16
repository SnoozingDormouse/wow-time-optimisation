using System.Collections.Generic;
using WoWTimeOptimisation.Models;

namespace WoWTimeOptimisation.Services
{
    public interface IAchievementRepository
    {
        string GetGoalKey(string category, string expansion);
        IEnumerable<int> GetAchievementsByGoal(string goalKey);
        IEnumerable<Stage> GetStagesForAchievement(int achievementId);
        string GetAchievementName(int achievement);
        IEnumerable<int> GetDescendentAchievementsForAchievement(int achievementId);
    }
}