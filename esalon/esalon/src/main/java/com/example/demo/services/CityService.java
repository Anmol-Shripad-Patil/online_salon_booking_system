package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;

import com.example.demo.repositories.CityRepo;

@Service
public class CityService {
	@Autowired 
	CityRepo cityrep;
	
	public City getCity_(String city)
	{
		City l;
		Optional<City> ol=cityrep.getCity(city);
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
	public List<City> getAll()
	{
		return cityrep.findAll();
	}
}
