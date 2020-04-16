CREATE PROCEDURE [dbo].[getDescendentAchievementsForAchievement]
	@AchievementId int = 0
AS
BEGIN
	with Achievements as
	(
		select * from
		(
			select 
				crit.AchievementId as AchievementIdA
			from dbo.AchievementCriterias ac
			join dbo.Criteria crit on ac.CriteriaId = crit.Id
			where 
				ac.AchievementId = @AchievementId
				AND crit.AchievementId IS NOT NULL
		)a
		outer apply
		(
			select 
				crit.AchievementId as AchievementIdB
			from dbo.AchievementCriterias ac
			join dbo.Criteria crit on ac.CriteriaId = crit.Id
			where 
				ac.AchievementId = a.AchievementIdA
				AND crit.AchievementId IS NOT NULL
		)b
		outer apply
		(
			select 
				crit.AchievementId as AchievementIdC
			from dbo.AchievementCriterias ac
			join dbo.Criteria crit on ac.CriteriaId = crit.Id
			where 
				ac.AchievementId = b.AchievementIdB
				AND crit.AchievementId IS NOT NULL
		)c
		outer apply
		(
			select 
				crit.AchievementId as AchievementIdD
			from dbo.AchievementCriterias ac
			join dbo.Criteria crit on ac.CriteriaId = crit.Id
			where 
				ac.AchievementId = c.AchievementIdC
				AND crit.AchievementId IS NOT NULL
		)d
	)
	select AchievementIdA as AchievementId from Achievements where AchievementIdA is not null
	union select AchievementIdB as AchievementId from Achievements where AchievementIdB is not null
	union select AchievementIdC as AchievementId from Achievements where AchievementIdC is not null
	union select AchievementIdD as AchievementId from Achievements where AchievementIdD is not null

END
