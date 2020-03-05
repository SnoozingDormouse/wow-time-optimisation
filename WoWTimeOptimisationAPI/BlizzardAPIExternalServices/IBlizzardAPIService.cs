public interface IBlizzardAPIService
{
    string GetBlizzardAPICharacterInfoAsJson(string field, Character character);
    string GetBlizzardAPICharacterInfoAsJson(Character character);
}
