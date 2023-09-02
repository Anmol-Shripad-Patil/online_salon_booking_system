package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Salon;
import com.example.demo.repositories.SalonRegRepo;

@Service
public class SalonRegService {
	
	@Autowired
	SalonRegRepo sarec;
	
	public Salon saveSalon(Salon s)
	{
		return sarec.save(s);
	}

}
