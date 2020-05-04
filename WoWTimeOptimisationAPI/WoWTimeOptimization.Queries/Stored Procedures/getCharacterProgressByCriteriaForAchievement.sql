CREATE PROCEDURE [dbo].[getCharacterProgressByCriteriaForAchievement]
	@AchievementId int = 0,
	@BlizzardId int = 0
AS
		SELECT
		chc.CriteriaId,
		chc.Amount,
		ISNULL(dbo.getCompletedStatusIfMultipleCriteria(@BlizzardId, c.AchievementId), chc.IsCompleted) AS IsCompleted
	FROM dbo.AchievementCriterias ac 
	JOIN dbo.Criteria c on ac.CriteriaId = c.Id
	JOIN dbo.CharacterCriterias chc on ac.CriteriaId = chc.CriteriaId
	WHERE 
		chc.CharacterId = @BlizzardId
		and ac.AchievementId = @AchievementId
