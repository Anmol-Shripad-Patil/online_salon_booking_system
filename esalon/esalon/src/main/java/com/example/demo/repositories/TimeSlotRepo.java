package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface TimeSlotRepo extends JpaRepository<TimeSlot, Integer> {

	@Query("select t from TimeSlot t where tid = :tid")
	public Optional<TimeSlot> getTimeSlot(int tid);
	
	
	
	
}
