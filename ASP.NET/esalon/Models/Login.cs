using System;
using System.Collections.Generic;

namespace esalon.Models;

public partial class Login
{
    public int LoginId { get; set; }

    public string? RegistrationDate { get; set; }

    public int? TypeOfUser { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual ICollection<Salon> Salons { get; set; } = new List<Salon>();
}
