﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WoWTimeOptimisation.Models
{
    public class Stage
    {
        public int CriteriaId { get; set; }
        public string Name { get; set; }
        public StageType Type { get; set; }
    }
}
