using esalon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace esalon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityRevenueController : ControllerBase
    {
        private readonly EsalonContext _context;

        public CityRevenueController(EsalonContext context)
        {
            _context = context;
        }

        [HttpGet("{cityId}")]
        public async Task<ActionResult<IEnumerable<SalonRevenue>>> GetCityRevenue(int cityId)
        {
            try
            {
                // Calculate the total revenue for all salons in the specified city
                var salonRevenues = await _context.Salons
                    .Where(s => s.CityId == cityId)
                    .Select(s => new SalonRevenue
                    {
                        SalonId = s.SalonId,
                        SalonName = s.SalonName, // Include the salon name
                        TotalRevenue = _context.Billings
                            .Where(b => b.SalonId == s.SalonId)
                            .Sum(b => b.TotalAmount)
                    })
                    .ToListAsync();

                return Ok(salonRevenues);
            }
            catch (Exception ex)
            {
                return BadRequest($"An error occurred: {ex.Message}");
            }
        }


    }
}
