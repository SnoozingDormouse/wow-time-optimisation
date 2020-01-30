using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlizzardAPIModels.Achievement
{
#pragma warning disable IDE1006 // Naming Styles
    public class Achievement
    {
        public int id { get; set; }
        public AchievementInfo achievement { get; set; }
        public Criteria criteria { get; set; }
        public UInt64 completed_timestamp { get; set; }
    }
#pragma warning restore IDE1006 // Naming Styles
}
