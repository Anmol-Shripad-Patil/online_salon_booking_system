package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginrepo;
	
	public Login getLogin(int login_id,String pwd)
	{
		Login l;
		Optional<Login> ol=loginrepo.getLogin(login_id, pwd);
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
	
	public Login save(Login l)
	{
		return loginrepo.save(l);
	}
	
	public Login getLoginById(int id)
	{
		return loginrepo.findById(id).get();
	}
public String getLoginById(String password) {
		
		return loginrepo.getLoginById(password);
	}

}
