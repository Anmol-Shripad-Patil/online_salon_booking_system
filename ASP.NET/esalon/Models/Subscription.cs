using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Subscription
{
    public int SubscriptionId { get; set; }

    public int SalonId { get; set; }

    public decimal Fees { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public virtual Salon Salon { get; set; } = null!;
}
