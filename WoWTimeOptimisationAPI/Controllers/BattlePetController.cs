using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WoWTimeOptimisation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BattlePetController : ControllerBase
    {

        private readonly ILogger<BattlePetController> _logger;

        public BattlePetController(ILogger<BattlePetController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<BattlePet> Get()
        {
            throw new NotImplementedException();
        }
    }
}
