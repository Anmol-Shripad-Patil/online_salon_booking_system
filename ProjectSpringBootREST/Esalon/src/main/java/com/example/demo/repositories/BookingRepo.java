package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;


@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer> {
	
	
	//@Query("select b from Booking b where b.barber.barber_id= :barber_id")
	//public List<Booking> findByBarber_BarberId(int barber_id);
	
	
	//List<Booking>findBy_BarberId(int barber_id);

	
	
	@Query("select c from Booking c where c.customer.customer_id= :customer_id")
	public List <Booking> getBookings(int customer_id);

	// @Query(value = "select * from bookings where barber_id IN (SELECT barber_id FROM barbers WHERE salon_id = :salon_id)", nativeQuery = true)
	
	@Query("select b from Booking b where b.barber.salon_id.salon_id= :salon_id")
	public List getBookingsBySalonId(int salon_id);


   // @Query("select b from Booking b where b.barber.barber_id= :barber_id")
	//List<Booking> findByBarber_BarberId(int barber_id);

    
    
    
  //  @Query("select b from booking b where b.barber.barber_id in :barberIds")
	//public List<Booking> findByBarber_Barber_idIn(List<Integer> barberIds);

}