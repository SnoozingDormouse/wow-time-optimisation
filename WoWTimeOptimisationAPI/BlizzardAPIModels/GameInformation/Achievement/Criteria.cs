using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlizzardAPIModels.Achievement
{
#pragma warning disable IDE1006 // Naming Styles
    public class Criteria
    {
        public int id { get; set; }
        public Boolean is_completed { get; set; }
        public IEnumerable<ChildCriteria> child_criteria { get; set; }
    }
#pragma warning restore IDE1006 // Naming Styles
}
