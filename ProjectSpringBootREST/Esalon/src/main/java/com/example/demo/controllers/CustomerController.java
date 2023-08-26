package com.example.demo.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Salon;
import com.example.demo.entities.SalonRegistration;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {

    

    @Autowired
    CustomerService cservice;
    
    @Autowired
    LoginService lserv;
    
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getCustomer/{login_id}")
	public Customer getCUS(@PathVariable("login_id") int login_id)
	{
    	Login loginid=lserv.getLoginById(login_id);
		return cservice.getCustomer_(loginid);
		
	}

}

