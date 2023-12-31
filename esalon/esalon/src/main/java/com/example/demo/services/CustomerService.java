package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.City;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CustomerRegRepo;
import com.example.demo.repositories.CustomerRepository;

@Service
public class CustomerService {

   @Autowired
   CustomerRepository crepository;

  
	
	public Customer getCustomerById(int id)
	{
		return crepository.findById(id).get();
	}

	public Customer getCustomer_(Login customer)
	{
		Customer l;
		Optional<Customer> ol=crepository.getCustomer(customer);
		try
		{
			l=ol.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		
		return l;
	}
	public Customer getCustomer(int customer_id)
	{
		Customer c;
		Optional<Customer> co=crepository.getCustomer_(customer_id);
		try
		{
					c=co.get();
		}
		catch(Exception e)
		{
			c=null;
		}
		
		return c;
	}
  
    }


