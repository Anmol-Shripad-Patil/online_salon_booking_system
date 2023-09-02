package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegistration;

@Repository
public interface CustomerRegRepo extends JpaRepository<Customer, Integer> {

	
}
