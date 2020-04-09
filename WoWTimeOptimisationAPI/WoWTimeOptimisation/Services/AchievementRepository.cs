using System.Collections.Generic;
using System.Linq;
using Dapper;
using WoWTimeOptimisation.Models;

namespace WoWTimeOptimisation.Services
{
    public class AchievementRepository : BaseRepository, IAchievementRepository
    {
        private string _connectionString;

        public AchievementRepository(
            string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<int> GetAchievementsByGoal(string goalKey)
        {
            var commandText = "dbo.getAchievementsForGoal";
            var query = 
                ExecuteCommand(
                    _connectionString,
                    c => c.Query<int>(commandText, new { @GoalKey = goalKey }, commandType: System.Data.CommandType.StoredProcedure))
                .ToList();

            return query;
        }

        public string GetGoalKey(string category, string expansion)
        {
            // eventually translate this to sql table

            if (category != "flying")
                throw new System.NotImplementedException();
            if (expansion != "BFA")
                throw new System.NotImplementedException();

            if (expansion == "BFA")
                return "flying-battle-for-azeroth";

            return string.Empty;
        }

        public IEnumerable<Stage> GetStagesForAchievement(int achievementId)
        {
            var commandText = "dbo.getCriteriaForAchievement";
            var query =
                ExecuteCommand(
                    _connectionString,
                    c => c.Query<Stage>(commandText, new { @AchievementId = achievementId }, commandType: System.Data.CommandType.StoredProcedure))
                .ToList();

            return query;
        }
    }
}
