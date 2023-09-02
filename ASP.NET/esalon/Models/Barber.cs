using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Barber
{
    public int BarberId { get; set; }

    public int SalonId { get; set; }

    public string BarberName { get; set; } = null!;

    public int Age { get; set; }

    public string Gender { get; set; } = null!;

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Salon Salon { get; set; } = null!;
}
