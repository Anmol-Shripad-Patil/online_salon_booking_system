using esalon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace esalon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RevenueController : ControllerBase
    {
        private readonly EsalonContext _context;

        public RevenueController(EsalonContext context)
        {
            _context = context;
        }

        [HttpGet("{salonId}")]
        public async Task<ActionResult<decimal>> GetRevenueBySalon(int salonId)
        {
            try
            {
                // Calculate the total revenue for the specified salon
                decimal totalRevenue = await _context.Billings
                    .Where(b => b.SalonId == salonId)
                    .SumAsync(b => b.TotalAmount);

                return Ok(totalRevenue);
            }
            catch (Exception ex)
            {
                return BadRequest($"An error occurred: {ex.Message}");
            }
        }

    }
}
