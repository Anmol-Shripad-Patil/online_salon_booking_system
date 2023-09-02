package com.example.demo.entities;

public class SalonRegistration {
	
	private String salon_name;
	private int city_id;
	private String city;
    private String salon_address;
    private String email;
    private String contact_no;
    private String password;
    private String login_id;
    private String registration_date;
    private String type_of_user;
	public SalonRegistration(String salon_name, int city_id, String city, String salon_address, String email,
			String contact_no, String password, String login_id, String registration_date, String type_of_user) {
		super();
		this.salon_name = salon_name;
		this.city_id = city_id;
		this.city = city;
		this.salon_address = salon_address;
		this.email = email;
		this.contact_no = contact_no;
		this.password = password;
		this.login_id = login_id;
		this.registration_date = registration_date;
		this.type_of_user = type_of_user;
	}
	public String getSalon_name() {
		return salon_name;
	}
	public void setSalon_name(String salon_name) {
		this.salon_name = salon_name;
	}
	public int getCity_id() {
		return city_id;
	}
	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getSalon_address() {
		return salon_address;
	}
	public void setSalon_address(String salon_address) {
		this.salon_address = salon_address;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getLogin_id() {
		return login_id;
	}
	public void setLogin_id(String login_id) {
		this.login_id = login_id;
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
	@Override
	public String toString() {
		return "SalonRegistration [salon_name=" + salon_name + ", city_id=" + city_id + ", city=" + city
				+ ", salon_address=" + salon_address + ", email=" + email + ", contact_no=" + contact_no + ", password="
				+ password + ", login_id=" + login_id + ", registration_date=" + registration_date + ", type_of_user="
				+ type_of_user + "]";
	}
    
    


}
