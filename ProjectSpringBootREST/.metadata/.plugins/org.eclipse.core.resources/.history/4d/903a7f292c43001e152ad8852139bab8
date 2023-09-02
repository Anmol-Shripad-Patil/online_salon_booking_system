package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.*;
import com.example.demo.services.TimeSlotService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SlotBookingController {
	
	@Autowired
	TimeSlotService tservice;
	
	@GetMapping("/timeslots/{barberId}")
	public List<TimeSlot> getTimeSlotsNotBookedForBarber(@PathVariable int barberId)
	{
		return tservice.getTImeSlotsNotBookedForBarber(barberId);
	}
	
}
