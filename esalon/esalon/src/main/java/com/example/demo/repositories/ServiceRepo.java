package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



import com.example.demo.entities.Servic;

@Repository
public interface ServiceRepo extends JpaRepository<Servic, Integer> {

    @Query("select s from Servic s where serviceID = :service_id")
    public Optional<Servic> getService(int service_id);
}

