CREATE FUNCTION [dbo].[getCompletedStatusIfMultipleCriteria]
(
	@CharacterId bigint,
	@AchievementId int
)
RETURNS INT
AS
BEGIN
	
	DECLARE @OverallCompleteness INT = 
	(select CONVERT(INT, AVG(a.IsCompleted)) FROM
		(
			SELECT
				CONVERT(DECIMAL, chc.IsCompleted) AS IsCompleted
			FROM dbo.AchievementCriterias ac
			JOIN dbo.CharacterCriterias chc on ac.CriteriaId = chc.CriteriaId
			WHERE 
				chc.CharacterId = @CharacterId
				and ac.AchievementId = @AchievementId
		) a
	)

	RETURN @OverallCompleteness;

END
