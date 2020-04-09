using System.Collections.Generic;

namespace WoWTimeOptimisation.Models
{
    public class AchievementStatus
    {
        public string Achievement { get; set; }
        public IEnumerable<Stage> Stages { get; set; }
    }
}
