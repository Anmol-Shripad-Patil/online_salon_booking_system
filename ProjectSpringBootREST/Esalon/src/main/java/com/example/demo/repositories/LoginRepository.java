package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>{

	
	@Query("select l from Login l where login_id = :login_id and password = :pwd")
	public Optional<Login>getLogin(int login_id,String pwd);

	
	 @Query("select l.login_id from Login l where l.password = :password")
	public String getLoginById(String password);
	
	
}
