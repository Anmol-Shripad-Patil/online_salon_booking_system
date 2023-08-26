package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("select c from Customer c where login_id= :login_id")
	public Optional<Customer> getCustomer(Login login_id);
	
	@Query("select c from Customer c where customer_id = :customer_id")
	public Optional<Customer> getCustomer_(int customer_id);
	
	
}
