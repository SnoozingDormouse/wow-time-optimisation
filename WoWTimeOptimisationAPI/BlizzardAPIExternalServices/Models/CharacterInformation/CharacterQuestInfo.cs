using System;
using System.Collections.Generic;

namespace BlizzardAPIModels.CharacterInformation
{
#pragma warning disable IDE1006 // Naming Styles
    public class CharacterQuestInfo : ICharacterInfo
    {
        public double lastModified { get; set; }
        public String name { get; set; }
        public String realm { get; set; }
        public String battlegroup { get; set; }
        public int Class { get; set; }
        public int race { get; set; }
        public int gender { get; set; }
        public int level { get; set; }
        public double achievementPoints { get; set; }
        public String thumbnail { get; set; }
        public String calcClass { get; set; }
        public int faction { get; set; }
        public IEnumerable<int> quests { get; set; }
        public int totalHonorableKills { get; set; }
    }
#pragma warning restore IDE1006 // Naming Styles
}
