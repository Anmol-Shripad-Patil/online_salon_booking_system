using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class City
{
    public int CityId { get; set; }

    public string City1 { get; set; } = null!;

    public virtual ICollection<Salon> Salons { get; set; } = new List<Salon>();
}
