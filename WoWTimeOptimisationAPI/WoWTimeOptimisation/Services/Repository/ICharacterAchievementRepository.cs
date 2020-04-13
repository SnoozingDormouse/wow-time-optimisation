using System.Collections.Generic;
using WoWTimeOptimisation.Models;

namespace WoWTimeOptimisation.Services
{
    public interface ICharacterAchievementRepository
    {
        int GetBlizzardIdForCharacter(string region, string realm, string name);
        IEnumerable<CharacterStage> GetCharacterStagesForAchievement(int achievementId, int blizzardId);
    }
}