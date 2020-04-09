CREATE PROCEDURE [dbo].[getAchievementsForGoal]
	@GoalKey VARCHAR(100) = null
AS
BEGIN
	
	DECLARE @goalId INT = (SELECT Id FROM dbo.Goals WHERE [Name] = @GoalKey)

	SELECT 
		AchievementId 
	FROM dbo.OrderedGoalAchievement o 
	WHERE o.GoalId = @goalId
	ORDER BY o.[Order] ASC

END
