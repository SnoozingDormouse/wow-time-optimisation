CREATE PROCEDURE [dbo].[getBlizzardIdForCharacter]
	@Region VARCHAR(20) = NULL,
	@Realm VARCHAR(20) = NULL,
	@Name VARCHAR(20) = NULL
AS
BEGIN
	SELECT BlizzardId FROM dbo.Characters WHERE LOWER([Name]) = LOWER(@Name) AND LOWER(Realm) = LOWER(@Realm)
END


