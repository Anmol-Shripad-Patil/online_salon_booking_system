using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Customer
{
    public int CustomerId { get; set; }

    public int LoginId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? ContactNo { get; set; }

    public string? Address { get; set; }

    public string? Gender { get; set; }

    public virtual ICollection<Billing> Billings { get; set; } = new List<Billing>();

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Login Login { get; set; } = null!;

    public virtual ICollection<Rating> Ratings { get; set; } = new List<Rating>();
}
