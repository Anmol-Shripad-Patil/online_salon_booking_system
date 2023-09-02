package com.example.demo.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Barber;
import com.example.demo.entities.BarberReg;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegistration;
import com.example.demo.entities.Login;
import com.example.demo.services.BarberService;
import com.example.demo.services.SalonService;
import com.example.demo.entities.Salon;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BarberController {
	@Autowired
	BarberService bserv;
	
	@Autowired
	SalonService sservice;
	
	@GetMapping("/getspecsbybarbers/{salon_id}")
	public List<Barber> getbaberbySalon(@PathVariable("salon_id")int salon_id)
	{
		return bserv.getbarberbysalonid(salon_id);
	}
	
	
	
	@PostMapping("/registerBarber")
	public Barber regBarber(@RequestBody BarberReg breg)
	{
	
		Salon s=sservice.getSalonId(breg.getSalon_id());
		Barber b=new Barber(s,breg.getBarber_name(),breg.getAge(),breg.getGender());
		
		Barber saved=bserv.saveBarber(b);
		
		return saved;
		
		
	}
	
	
}
	
	
	

