CREATE PROCEDURE [dbo].[getAchievementName]
	@AchievementId int = 0
AS
BEGIN
	SELECT 
		[Name]
	FROM dbo.Achievements
	WHERE Id = @AchievementId
END
