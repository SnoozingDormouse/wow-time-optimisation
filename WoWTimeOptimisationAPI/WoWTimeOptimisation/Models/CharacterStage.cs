﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WoWTimeOptimisation.Models
{
    public class CharacterStage
    {
        public int CriteriaId { get; set; }
        public int Amount { get; set; }
        public bool IsCompleted { get; set; }
    }
}
