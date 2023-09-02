package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Barber;
import com.example.demo.entities.City;
import com.example.demo.repositories.BarberRepo;


@Service
public class BarberService {
	
	@Autowired
	BarberRepo brepo;
	
	public Barber getBarber(int barberId)
	{
		Barber b;
		Optional<Barber> bo=brepo.getBarber(barberId);
		try
		{
					b=bo.get();
		}
		catch(Exception e)
		{
			b=null;
		}
		
		return b;
	}
	public List<Barber> getbarberbysalonid(int salon_id)
	{
		return brepo.getbabersbysalon(salon_id);
	}
	public Barber saveBarber(Barber b)
	{
		return brepo.save(b);
	}

}
