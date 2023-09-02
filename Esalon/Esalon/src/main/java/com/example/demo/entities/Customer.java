

package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customer_id;

    
    private String first_name;
    private String last_name;
    private String email;
    private String contact_no;
    private String address;
    private String gender;
    
    @OneToOne
    @JoinColumn(name = "login_id")
    private Login login_id;

    public Customer() {
    }

//    public Customer(String first_name, String last_name, String email, String contact_no, String address,String gender) {
//        this.first_name = first_name;
//        this.last_name = last_name;
//        this.email = email;
//        this.contact_no = contact_no;
//        this.address = address;
//        this.gender=gender;
//        
//    }
    
    

   

    public Customer(Login login_id, String first_name, String last_name, String email, String contact_no,
		String address, String gender) {
	super();
	
	this.login_id = login_id;
	this.first_name = first_name;
	this.last_name = last_name;
	this.email = email;
	this.contact_no = contact_no;
	this.address = address;
	this.gender = gender;
}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	
    
    
}


