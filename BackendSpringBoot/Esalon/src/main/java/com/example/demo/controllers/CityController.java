package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.services.CityService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CityController {
	@Autowired
	CityService cser;
	
	@GetMapping("/getallcities")
	public List<City> getAll()
	{
		return  cser.getAll();
	}
	
}