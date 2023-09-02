using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int ServiceId { get; set; }

    public int BarberId { get; set; }

    public int CustomerId { get; set; }

    public int Tid { get; set; }

    public string? Status { get; set; }

    public int? SalonId { get; set; }

    public virtual Barber Barber { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual Salon? Salon { get; set; }

    public virtual Service Service { get; set; } = null!;

    public virtual TimeSlot TidNavigation { get; set; } = null!;
}
