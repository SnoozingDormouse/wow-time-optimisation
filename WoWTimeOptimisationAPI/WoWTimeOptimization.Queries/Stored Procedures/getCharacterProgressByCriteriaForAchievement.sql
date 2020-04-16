CREATE PROCEDURE [dbo].[getCharacterProgressByCriteriaForAchievement]
	@AchievementId int = 0,
	@BlizzardId int = 0
AS
	SELECT
	chc.CriteriaId,
	chc.Amount,
	chc.IsCompleted
FROM dbo.AchievementCriterias ac
JOIN dbo.CharacterCriterias chc on ac.CriteriaId = chc.CriteriaId
WHERE 
	chc.CharacterId = @BlizzardId
	and ac.AchievementId = @AchievementId
