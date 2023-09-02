package com.example.demo.controllers;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegistration;
import com.example.demo.entities.Login;
import com.example.demo.services.CustomerRegService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;

@RestController
public class CustomerRegController {
	
	@Autowired
	CustomerRegService custregserv;
	
	@Autowired
	CustomerService custserv;
	
	@Autowired
	LoginService logserv;
	
	@PostMapping("/registerCustomer")
	@CrossOrigin(origins = "http://localhost:3000")
	public Customer regUser(@RequestBody CustomerRegistration creg)
	{
		//Customer c=custserv.getRole(creg.getRoleid());
		SimpleDateFormat f=new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date date=new Date();
		String strDate=f.format(date);
		
		Login l=new Login(creg.getPassword(),strDate,1);
		
		Login lsaved=logserv.save(l);
		
		
		Customer c=new Customer(l,creg.getFirst_name(),creg.getLast_name(),creg.getEmail(),creg.getContact_no(),creg.getAddress(),creg.getGender());
		
		
		
		Customer saved=custregserv.saveCustomer(c);
		
		return saved;
		
		
	}

}
