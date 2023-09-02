package com.example.demo.entities;

import java.time.LocalDate;

public class CustomerRegistration {
    private String first_name;
    private String last_name;
    private String email;
    private String contact_no;
    private String gender;
    private String address;
    private String password;
    private String userid;
    private String registration_date;
    private String type_of_user;
	public CustomerRegistration(String first_name, String last_name, String email, String contact_no, String gender,
			String address, String password, String userid, String registration_date, String type_of_user) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.gender = gender;
		this.address = address;
		this.password = password;
		this.userid = userid;
		this.registration_date = registration_date;
		this.type_of_user = type_of_user;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact_no() {
		return contact_no;
	}
	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getRegistration_date() {
		return registration_date;
	}
	public void setRegistration_date(String registration_date) {
		this.registration_date = registration_date;
	}
	public String getType_of_user() {
		return type_of_user;
	}
	public void setType_of_user(String type_of_user) {
		this.type_of_user = type_of_user;
	}
    
    
    
    
}

