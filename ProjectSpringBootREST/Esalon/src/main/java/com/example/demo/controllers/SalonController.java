package com.example.demo.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Barber;
import com.example.demo.entities.Booking;
import com.example.demo.entities.City;
import com.example.demo.entities.Login;
import com.example.demo.entities.Salon;
import com.example.demo.services.BarberService;
import com.example.demo.services.BookingService;
import com.example.demo.services.CityService;
import com.example.demo.services.LoginService;
import com.example.demo.services.SalonService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SalonController {
	
	@Autowired
	SalonService salerv;
	
	@Autowired
	CityService cityserv;
	
	@Autowired
	BarberService barberservice;
	
	@Autowired
	BookingService bookingservice;
	
	
	@GetMapping("/getspecsalons/{city_id}")
	public List<Salon> getsalonBycity(@PathVariable int city_id)
	{
		//System.out.println("1."+city_id);
		//City c=cityserv.getCity_(null);
		
		return salerv.getSalonByCity(city_id);
	}
	
	@GetMapping("/salon/{salon_id}")
    public List<Booking> getBookingsBySalonId(@PathVariable int salon_id) {
        List<Barber> barbers = barberservice.getBarbersBySalonId(salon_id);
        List<Integer> barberIds = barbers.stream()
                .map(Barber::getBarber_id)
                .collect(Collectors.toList());

        return bookingservice.getBookingsByBarberIds(barberIds);
    }
}