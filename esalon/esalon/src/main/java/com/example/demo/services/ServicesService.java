package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.example.demo.entities.Servic;

import com.example.demo.repositories.ServiceRepo;

@Service
public class ServicesService {
	
	@Autowired
	ServiceRepo srepo;
	
	public Servic getService(int service_id)
	{
		Servic s;
		Optional<Servic> so=srepo.getService(service_id);
		try
		{
					s=so.get();
		}
		catch(Exception e)
		{
			s=null;
		}
		
		return s;
	}
	
	public List<Servic> getAll()
	{
		return srepo.findAll();
	}

}
