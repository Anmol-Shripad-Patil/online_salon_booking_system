package com.example.demo.entities;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int login_id;

    private String registration_date;
    private int type_of_user;
    private String password;

    public Login() {
		super();
		
	}

	public Login( String password2, String registration_date2, int type_of_user2) {
		// TODO Auto-generated constructor stub
    	this.password = password2;
        
        this.registration_date=registration_date2;
        this.type_of_user=type_of_user2;
	}

	public int getLoginId() {
        return login_id;
    }

    public void setLoginId(int loginId) {
        this.login_id = loginId;
    }

    public String getRegistrationDate() {
        return registration_date;
    }

    public void setRegistrationDate(String localDate) {
        this.registration_date = localDate;
    }

    public int getTypeOfUser() {
        return type_of_user;
    }

    public void setTypeOfUser(int typeOfUser) {
        this.type_of_user = typeOfUser;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    
}
