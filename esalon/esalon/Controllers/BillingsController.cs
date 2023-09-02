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
    public class BillingsController : ControllerBase
    {
        private readonly EsalonContext _context;

        public BillingsController(EsalonContext context)
        {
            _context = context;
        }

        // GET: api/Billings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Billing>>> GetBillings()
        {
          if (_context.Billings == null)
          {
              return NotFound();
          }
            return await _context.Billings.ToListAsync();
        }

        // GET: api/Billings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Billing>> GetBilling(int id)
        {
          if (_context.Billings == null)
          {
              return NotFound();
          }
            var billing = await _context.Billings.FindAsync(id);

            if (billing == null)
            {
                return NotFound();
            }

            return billing;
        }



        // DELETE: api/Billings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBilling(int id)
        {
            if (_context.Billings == null)
            {
                return NotFound();
            }
            var billing = await _context.Billings.FindAsync(id);
            if (billing == null)
            {
                return NotFound();
            }

            _context.Billings.Remove(billing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BillingExists(int id)
        {
            return (_context.Billings?.Any(e => e.BillingId == id)).GetValueOrDefault();
        }
    }
}
