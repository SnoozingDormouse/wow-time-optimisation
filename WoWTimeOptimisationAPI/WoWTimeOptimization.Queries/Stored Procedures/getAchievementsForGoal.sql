CREATE PROCEDURE [dbo].[getAchievementsForGoal]
	@GoalKey VARCHAR(100) = null
AS
BEGIN
	
	DECLARE @goalId INT = (SELECT Id FROM dbo.Goals WHERE [Name] = @GoalKey)

	SELECT 
		AchievementId 
	FROM dbo.GoalAchievement o 
	WHERE o.GoalId = @goalId

END
