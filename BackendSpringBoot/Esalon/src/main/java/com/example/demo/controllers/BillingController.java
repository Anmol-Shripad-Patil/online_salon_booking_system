package com.example.demo.controllers;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Barber;
import com.example.demo.entities.Billing;
import com.example.demo.entities.BillingDump;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Salon;
import com.example.demo.services.BarberService;
import com.example.demo.services.BillingService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.SalonService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BillingController {
	
	@Autowired
	BillingService biserv;
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	SalonService sservice;
	
	
	
	@PostMapping("/setBillData")
	public Billing billingdata(@RequestBody BillingDump bdump)
	{
		
		LocalDate currentDate = LocalDate.now();
        String billing_date = currentDate.toString();
		String payment_status="unpaid";
	
		Customer c=cservice.getCustomer(bdump.getCustomer_id());
		Salon s=sservice.getSalonId(bdump.getSalon_id());
		
		Billing b=new Billing(c,s,billing_date,bdump.getTotal_amount(),payment_status);
		
		Billing saved=biserv.saveBilling(b);
		
		return saved;
	
	}
	
	

}

