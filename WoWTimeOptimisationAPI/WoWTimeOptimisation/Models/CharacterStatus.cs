using System.Collections.Generic;

namespace WoWTimeOptimisation.Models
{
    public class CharacterStatus
    {
        public string CharacterName { get; set; }
        public List<CharacterStage> CharacterSteps { get; set; }
    }
}
