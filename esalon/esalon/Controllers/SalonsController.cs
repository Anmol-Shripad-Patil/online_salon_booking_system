using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using esalon.Models;

namespace esalon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalonsController : ControllerBase
    {
        private readonly EsalonContext _context;

        public SalonsController(EsalonContext context)
        {
            _context = context;
        }

        // GET: api/Salons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salon>>> GetSalons()
        {
          if (_context.Salons == null)
          {
              return NotFound();
          }
            return await _context.Salons.ToListAsync();
        }

        // GET: api/Salons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Salon>> GetSalon(int id)
        {
          if (_context.Salons == null)
          {
              return NotFound();
          }
            var salon = await _context.Salons.FindAsync(id);

            if (salon == null)
            {
                return NotFound();
            }

            return salon;
        }



        // DELETE: api/Salons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalon(int id)
        {
            if (_context.Salons == null)
            {
                return NotFound();
            }
            var salon = await _context.Salons.FindAsync(id);
            if (salon == null)
            {
                return NotFound();
            }

            _context.Salons.Remove(salon);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalonExists(int id)
        {
            return (_context.Salons?.Any(e => e.SalonId == id)).GetValueOrDefault();
        }
    }
}
