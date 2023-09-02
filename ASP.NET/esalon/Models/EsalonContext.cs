using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace esalon.Models;

public partial class EsalonContext : DbContext
{
    public EsalonContext()
    {
    }

    public EsalonContext(DbContextOptions<EsalonContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Barber> Barbers { get; set; }

    public virtual DbSet<Billing> Billings { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Rating> Ratings { get; set; }

    public virtual DbSet<Salon> Salons { get; set; }

    public virtual DbSet<Service> Services { get; set; }

    public virtual DbSet<Subscription> Subscriptions { get; set; }

    public virtual DbSet<TimeSlot> TimeSlots { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=esalon", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Barber>(entity =>
        {
            entity.HasKey(e => e.BarberId).HasName("PRIMARY");

            entity.ToTable("barbers");

            entity.HasIndex(e => e.SalonId, "salon_idb_idx");

            entity.Property(e => e.BarberId).HasColumnName("barber_id");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.BarberName)
                .HasMaxLength(20)
                .HasColumnName("barber_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
            entity.Property(e => e.SalonId).HasColumnName("salon_id");

            entity.HasOne(d => d.Salon).WithMany(p => p.Barbers)
                .HasForeignKey(d => d.SalonId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("salon_idb");
        });

        modelBuilder.Entity<Billing>(entity =>
        {
            entity.HasKey(e => e.BillingId).HasName("PRIMARY");

            entity.ToTable("billings");

            entity.HasIndex(e => e.SalonId, "FKtripcymqpkctyc5rrga1n0e4j");

            entity.HasIndex(e => e.CustomerId, "customer_idbt_idx");

            entity.Property(e => e.BillingId).HasColumnName("billing_id");
            entity.Property(e => e.BillingDate)
                .HasColumnType("datetime")
                .HasColumnName("billing_date");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.PaymentStatus)
                .HasMaxLength(10)
                .HasDefaultValueSql("'unpaid'")
                .HasColumnName("payment_status");
            entity.Property(e => e.SalonId).HasColumnName("salon_id");
            entity.Property(e => e.TotalAmount)
                .HasPrecision(7, 2)
                .HasColumnName("total_amount");

            entity.HasOne(d => d.Customer).WithMany(p => p.Billings)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("customer_idbt");

            entity.HasOne(d => d.Salon).WithMany(p => p.Billings)
                .HasForeignKey(d => d.SalonId)
                .HasConstraintName("FKtripcymqpkctyc5rrga1n0e4j");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.ToTable("bookings");

            entity.HasIndex(e => e.SalonId, "FKt638tl0q4baxbnh20epgpn4gr");

            entity.HasIndex(e => e.BarberId, "barber_idb_idx");

            entity.HasIndex(e => e.CustomerId, "customer_idb_idx");

            entity.HasIndex(e => e.ServiceId, "service_idb_idx");

            entity.HasIndex(e => e.Tid, "slot_idb_idx");

            entity.Property(e => e.BookingId).HasColumnName("booking_id");
            entity.Property(e => e.BarberId).HasColumnName("barber_id");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.SalonId).HasColumnName("salon_id");
            entity.Property(e => e.ServiceId).HasColumnName("service_id");
            entity.Property(e => e.Status)
                .HasMaxLength(45)
                .HasColumnName("status");
            entity.Property(e => e.Tid).HasColumnName("tid");

            entity.HasOne(d => d.Barber).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.BarberId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("barber_idb");

            entity.HasOne(d => d.Customer).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("customer_idb");

            entity.HasOne(d => d.Salon).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.SalonId)
                .HasConstraintName("FKt638tl0q4baxbnh20epgpn4gr");

            entity.HasOne(d => d.Service).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.ServiceId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("service_idb");

            entity.HasOne(d => d.TidNavigation).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.Tid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("slot_idb");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PRIMARY");

            entity.ToTable("cities");

            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.City1)
                .HasMaxLength(10)
                .HasColumnName("city");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustomerId).HasName("PRIMARY");

            entity.ToTable("customers");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(255)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(255)
                .HasColumnName("gender");
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .HasColumnName("last_name");
            entity.Property(e => e.LoginId).HasColumnName("login_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("login_id");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.RegistrationDate)
                .HasMaxLength(255)
                .HasColumnName("registration_date");
            entity.Property(e => e.TypeOfUser).HasColumnName("type_of_user");
        });

        modelBuilder.Entity<Rating>(entity =>
        {
            entity.HasKey(e => e.RatingId).HasName("PRIMARY");

            entity.ToTable("ratings");

            entity.HasIndex(e => e.CustomerId, "customer_idr_idx");

            entity.Property(e => e.RatingId).HasColumnName("rating_id");
            entity.Property(e => e.Comment)
                .HasMaxLength(255)
                .HasDefaultValueSql("'null'")
                .HasColumnName("comment");
            entity.Property(e => e.CustomerId).HasColumnName("customer_id");
            entity.Property(e => e.Date)
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.Rating1).HasColumnName("rating");

            entity.HasOne(d => d.Customer).WithMany(p => p.Ratings)
                .HasForeignKey(d => d.CustomerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("customer_idr");
        });

        modelBuilder.Entity<Salon>(entity =>
        {
            entity.HasKey(e => e.SalonId).HasName("PRIMARY");

            entity.ToTable("salons");

            entity.HasIndex(e => e.CityId, "city_ids_idx");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.Property(e => e.SalonId).HasColumnName("salon_id");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(255)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.SalonAddress)
                .HasMaxLength(255)
                .HasColumnName("salon_address");
            entity.Property(e => e.SalonName)
                .HasMaxLength(255)
                .HasColumnName("salon_name");

            entity.HasOne(d => d.City).WithMany(p => p.Salons)
                .HasForeignKey(d => d.CityId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("city_ids");

            entity.HasOne(d => d.Login).WithMany(p => p.Salons)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("salon_isd");
        });

        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.ServiceId).HasName("PRIMARY");

            entity.ToTable("services");

            entity.Property(e => e.ServiceId).HasColumnName("serviceID");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.ServiceName)
                .HasMaxLength(255)
                .HasColumnName("service_name");
        });

        modelBuilder.Entity<Subscription>(entity =>
        {
            entity.HasKey(e => e.SubscriptionId).HasName("PRIMARY");

            entity.ToTable("subscriptions");

            entity.HasIndex(e => e.SalonId, "salon_ids_idx");

            entity.Property(e => e.SubscriptionId).HasColumnName("subscription_id");
            entity.Property(e => e.EndDate)
                .HasColumnType("datetime")
                .HasColumnName("end_date");
            entity.Property(e => e.Fees)
                .HasPrecision(7, 2)
                .HasColumnName("fees");
            entity.Property(e => e.SalonId).HasColumnName("salon_id");
            entity.Property(e => e.StartDate)
                .HasColumnType("datetime")
                .HasColumnName("start_date");

            entity.HasOne(d => d.Salon).WithMany(p => p.Subscriptions)
                .HasForeignKey(d => d.SalonId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("salon_ids");
        });

        modelBuilder.Entity<TimeSlot>(entity =>
        {
            entity.HasKey(e => e.Tid).HasName("PRIMARY");

            entity.ToTable("time_slots");

            entity.Property(e => e.Tid).HasColumnName("tid");
            entity.Property(e => e.EndTime)
                .HasColumnType("time")
                .HasColumnName("End_time");
            entity.Property(e => e.StartTime)
                .HasColumnType("time")
                .HasColumnName("Start_time");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
