CREATE PROCEDURE [dbo].[getCharacterProgressByCriteriaForAchievement]
	@AchievementId int = 0,
	@BlizzardId int = 0
AS
	SELECT 
		gc.CriteriaId,
		cc.Amount,
		cc.IsComplete
	FROM dbo.GoalCriterias gc
	INNER JOIN dbo.Criteria c ON gc.CriteriaId = c.Id
	INNER JOIN dbo.CharacterCriterias cc ON c.Id = cc.CriteriaId
	WHERE 
		gc.AchievementId = @AchievementId
		AND cc.CharacterId = @BlizzardId
