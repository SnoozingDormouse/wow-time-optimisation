CREATE PROCEDURE [dbo].[getAchievementsForGoal]
	@GoalKey VARCHAR(100) = null
AS
BEGIN
	
	DECLARE @goalId INT = (SELECT Id FROM dbo.Goals WHERE [Name] = @GoalKey)

	SELECT 
		DISTINCT AchievementId 
	FROM dbo.GoalCriterias gc 
	WHERE gc.GoalId = @goalId

END
