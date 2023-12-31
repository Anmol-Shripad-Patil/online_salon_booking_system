package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "salons")
public class Salon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int salon_id;

    private String salon_name;

    @ManyToOne
    @JoinColumn(name = "login_id")
    private Login login_id;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city_id;

    private String salon_address;
    private String email;
    private String contact_no;
    
    
    
	public Salon() {
		super();
	}

	public Salon(String salon_name, Login login_id, City city_id, String salon_address, String email,
			String contact_no) {
		super();
		
		this.salon_name = salon_name;
		this.login_id = login_id;
		this.city_id = city_id;
		this.salon_address = salon_address;
		this.email = email;
		this.contact_no = contact_no;
	}

	public int getSalon_id() {
		return salon_id;
	}

	public void setSalon_id(int salon_id) {
		this.salon_id = salon_id;
	}

	public String getSalon_name() {
		return salon_name;
	}

	public void setSalon_name(String salon_name) {
		this.salon_name = salon_name;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

	public City getCity_id() {
		return city_id;
	}

	public void setCity_id(City city_id) {
		this.city_id = city_id;
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

	@Override
	public String toString() {
		return "Salon [salon_id=" + salon_id + ", salon_name=" + salon_name + ", login_id=" + login_id + ", city_id="
				+ city_id + ", salon_address=" + salon_address + ", email=" + email + ", contact_no=" + contact_no
				+ "]";
	}
	
	

    
}

