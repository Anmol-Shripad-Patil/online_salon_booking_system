package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegistration;
import com.example.demo.repositories.CustomerRegRepo;

@Service
public class CustomerRegService {
	@Autowired
	CustomerRegRepo custregrepo;
	
	public Customer saveCustomer(Customer c)
	{
		return custregrepo.save(c);
	}

}
