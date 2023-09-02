using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class TimeSlot
{
    public int Tid { get; set; }

    public TimeOnly StartTime { get; set; }

    public TimeOnly EndTime { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
