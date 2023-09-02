package com.example.demo.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.City;
import com.example.demo.entities.TimeSlot;
import com.example.demo.repositories.BookingRepo;
import com.example.demo.repositories.TimeSlotRepo;

@Service
public class TimeSlotService {

	
	@Autowired
	TimeSlotRepo trepo;
	
	@Autowired
	BookingRepo brepo;
	
	@Autowired
	public TimeSlotService(TimeSlotRepo trepo,BookingRepo brepo)
	{
		this.trepo=trepo;
		this.brepo=brepo;
	}
	
	public TimeSlot getTimeSlot(int Id)
	{
		 TimeSlot t;
		Optional<TimeSlot> to=trepo.getTimeSlot(Id);
		try
		{
					t=to.get();
		}
		catch(Exception e)
		{
			t=null;
		}
		
		return t;
	}
	public List<TimeSlot> getTImeSlotsNotBookedForBarber(int barberId)
	{
		List<Booking> bookedSlots=brepo.findByBarber_BarberId(barberId);
		List<TimeSlot> allTimeSlots = trepo.findAll();
		
		List<TimeSlot> bookedTimeSlots = bookedSlots.stream()
				.map(Booking::getSlot)
				.collect(Collectors.toList());
		
		allTimeSlots.removeAll(bookedTimeSlots);
		
		return allTimeSlots;
	}
}
