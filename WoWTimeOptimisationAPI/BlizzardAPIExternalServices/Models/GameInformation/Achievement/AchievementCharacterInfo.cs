using System;

namespace BlizzardAPIModels.Achievement
{
#pragma warning disable IDE1006 // Naming Styles
    public class AchievementCharacterInfo
    {
        public HRefInfo key { get; set; }
        public string name { get; set; }
        public Int64 id { get; set; }
        public RealmInfo realm { get; set; }
    }
#pragma warning restore IDE1006 // Naming Styles
}