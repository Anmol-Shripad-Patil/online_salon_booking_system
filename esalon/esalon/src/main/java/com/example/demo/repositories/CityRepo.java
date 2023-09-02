package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.City;

public interface CityRepo extends JpaRepository<City, Integer> {
	
	@Query("select c from City c where city= :city")
	public Optional<City> getCity(String city);
	
}
