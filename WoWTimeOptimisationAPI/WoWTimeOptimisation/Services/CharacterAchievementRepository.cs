using System.Collections.Generic;
using System.Linq;
using Dapper;
using WoWTimeOptimisation.Models;

namespace WoWTimeOptimisation.Services
{
    public class CharacterAchievementRepository : BaseRepository, ICharacterAchievementRepository
    {
        private string _connectionString;

        public CharacterAchievementRepository(
            string connectionString)
        {
            _connectionString = connectionString;
        }

        public int GetBlizzardIdForCharacter(string region, string realm, string name)
        {
            var commandText = "dbo.getBlizzardIdForCharacter";
            var query =
                ExecuteCommand(
                    _connectionString,
                    c => c.Query<int>(commandText, new { @Region = region, @Realm = realm, @Name = name }, commandType: System.Data.CommandType.StoredProcedure))
                .SingleOrDefault();

            return query;
        }

        public IEnumerable<CharacterStage> GetCharacterStagesForAchievement(int achievementId, int blizzardId)
        {
            var commandText = "dbo.getCharacterProgressByCriteriaForAchievement";
            var query =
                ExecuteCommand(
                    _connectionString,
                    c => c.Query<CharacterStage>(commandText, new { @AchievementId = achievementId, @BlizzardId = blizzardId }, commandType: System.Data.CommandType.StoredProcedure))
                .ToList();

            return query;
        }
    }
}
