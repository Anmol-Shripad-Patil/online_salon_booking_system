using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Salon
{
    public int SalonId { get; set; }

    public string? SalonName { get; set; }

    public int LoginId { get; set; }

    public int CityId { get; set; }

    public string? SalonAddress { get; set; }

    public string? Email { get; set; }

    public string? ContactNo { get; set; }

    public virtual ICollection<Barber> Barbers { get; set; } = new List<Barber>();

    public virtual ICollection<Billing> Billings { get; set; } = new List<Billing>();

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual City City { get; set; } = null!;

    public virtual Login Login { get; set; } = null!;

    public virtual ICollection<Subscription> Subscriptions { get; set; } = new List<Subscription>();
}
