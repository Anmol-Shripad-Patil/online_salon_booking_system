package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Billing;
import com.example.demo.repositories.BillingRepo;

@Service
public class BillingService {
	
	
	@Autowired
	BillingRepo birepo;

	public Billing saveBilling(Billing b) {
		
		return birepo.save(b) ;
	}
	
	

}
