package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.services.LoginService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService logserv;
	
	@PostMapping("/checklogin")
	public Login chklogin(@RequestBody  LoginCheck lcheck)
	{
		return logserv.getLogin(lcheck.getLogin_id(),lcheck.getPassword());
	}  

	
	
}
