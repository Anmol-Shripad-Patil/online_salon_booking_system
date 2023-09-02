package com.example.demo.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Login;
import com.example.demo.entities.Salon;
import com.example.demo.entities.City;
import com.example.demo.entities.SalonRegistration;
import com.example.demo.services.CityService;
import com.example.demo.services.EmailService;
import com.example.demo.services.LoginService;
import com.example.demo.services.SalonRegService;

@RestController
public class SalonRegController {
	
	@Autowired
	SalonRegService salserv;
	
	@Autowired 
	CityService cser;
	
	@Autowired
	LoginService logserv;
	
	@Autowired
	EmailService emailService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/registerSalon")
	public Salon regUserS(@RequestBody SalonRegistration salreg)
	{
		
		SimpleDateFormat f=new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date date=new Date();
		String strDate=f.format(date);
		
		Login l_S=new Login(salreg.getPassword(),strDate,2);
		Login ls_saved=logserv.save(l_S);
	City c=cser.getCity_(salreg.getCity());
	
	Salon s=new Salon(salreg.getSalon_name(),l_S,c,salreg.getSalon_address(),salreg.getEmail(),salreg.getContact_no());
	Salon sSaved=salserv.saveSalon(s);
	
	String to = salreg.getEmail();
    String subject = "Welcome to our platform!";
    String text = "Dear " + salreg.getSalon_name() +" Your Login Id is: "+logserv.getLoginById(salreg.getPassword())+ ",\n\nWelcome to ESALON-Salon Booking System. Thank you for registering!";
    emailService.sendRegistrationEmail(to, subject, text);
		
	return sSaved;
		
	}
}
