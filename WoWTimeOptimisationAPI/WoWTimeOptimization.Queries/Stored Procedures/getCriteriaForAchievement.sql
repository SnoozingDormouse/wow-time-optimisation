CREATE PROCEDURE [dbo].[getCriteriaForAchievement]
	@AchievementId INT = 0
AS
	select 
	c.Id as CriteriaId,
	c.Amount,
	c.AchievementId,
	c.Description,
	c.Faction,
	c.OperatorName,
	c.OperatorType,
	cc.CriteriaId as ParentId
	from dbo.Achievements a
	left join dbo.AchievementCriterias ac on a.Id = ac.AchievementId
	left join dbo.Criteria c on ac.CriteriaId = c.Id
	left join dbo.CriteriaCriterias cc on cc.ChildCriteriaId = c.Id
	where a.Id = @AchievementId
	and c.[OperatorType] IS NULL
	order by c.AchievementId asc
