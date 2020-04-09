CREATE PROCEDURE [dbo].[getCriteriaForAchievement]
	@AchievementId INT = 0
AS
	SELECT 
		gc.CriteriaId,
		COALESCE(c.Description, acd.Description, 'CriteriaId: ' + CONVERT(VARCHAR(10), gc.CriteriaId)) AS [Name],
		0 AS [Type]
	FROM dbo.GoalCriterias gc
	INNER JOIN dbo.Criteria c ON gc.CriteriaId = c.Id
	LEFT JOIN dbo.AnnotatedCriteriaDescription acd on c.Id = acd.CriteriaId
	WHERE gc.AchievementId = @AchievementId
	AND c.ParentId IS NOT NULL
	ORDER BY c.ParentId
