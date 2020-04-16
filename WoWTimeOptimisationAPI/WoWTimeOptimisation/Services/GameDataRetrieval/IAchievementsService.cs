using System.Collections.Generic;
using WoWTimeOptimisation.Models;

namespace WoWTimeOptimisation.Services.GameDataRetrieval
{
    public interface IAchievementsService
    {
        IEnumerable<AchievementStatus> GetStages(string category, string expansion, int faction = 0);
    }
}