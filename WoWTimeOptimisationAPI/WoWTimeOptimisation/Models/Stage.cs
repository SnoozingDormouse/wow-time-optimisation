using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WoWTimeOptimisation.Models
{
    public class Stage
    {
        public int CriteriaId { get; set; }
        public int? Amount { get; set; }
        public int? AchievementId { get; set; }
        public string Description { get; set; }
        public int? Faction { get; set; }
        public int? ParentId { get; set; }
        public StageType Type { get; set; }
    }
}
