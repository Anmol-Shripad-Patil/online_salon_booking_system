using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Billing
{
    public int BillingId { get; set; }

    public int CustomerId { get; set; }

    public DateTime BillingDate { get; set; }

    public decimal TotalAmount { get; set; }

    public string PaymentStatus { get; set; } = null!;

    public int? SalonId { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Salon? Salon { get; set; }
}
