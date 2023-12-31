package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Barber;
import com.example.demo.entities.City;

@Repository
public interface BarberRepo extends JpaRepository<Barber, Integer> {

	@Query("select b from Barber b where barber_id = :barber_id")
	public Optional<Barber> getBarber(int barber_id);
	
	@Query("select b from Barber b where b.salon_id.salon_id= :salon_id")
	public List<Barber> getbabersbysalon(int salon_id);
}
