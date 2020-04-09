CREATE PROCEDURE [dbo].[getCriteriaForAchievement]
	@AchievementId INT = 0
AS
	SELECT 
		gc.CriteriaId,
		ISNULL(c.Description, 'CriteriaId: ' + CONVERT(VARCHAR(10), gc.CriteriaId)) AS [Name],
		0 AS [Type]
	FROM dbo.GoalCriterias gc
	INNER JOIN dbo.Criteria c ON gc.CriteriaId = c.Id
	WHERE gc.AchievementId = @AchievementId
	ORDER BY c.ParentId
