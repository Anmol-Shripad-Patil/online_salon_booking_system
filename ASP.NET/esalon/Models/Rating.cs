using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Rating
{
    public int RatingId { get; set; }

    public int CustomerId { get; set; }

    public int Rating1 { get; set; }

    public string? Comment { get; set; }

    public DateTime Date { get; set; }

    public virtual Customer Customer { get; set; } = null!;
}
