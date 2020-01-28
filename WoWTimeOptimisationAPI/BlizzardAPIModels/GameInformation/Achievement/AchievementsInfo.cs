using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlizzardAPIModels.Achievement
{
#pragma warning disable IDE1006 // Naming Styles
    public class AchievementsInfo
    {
        public int total_quality { get; set; }
        public int total_points { get; set; }
        public IEnumerable<Achievement> achievements { get; set; }
        public AchievementCharacterInfo character { get; set; }
    }
#pragma warning restore IDE1006 // Naming Styles
}
