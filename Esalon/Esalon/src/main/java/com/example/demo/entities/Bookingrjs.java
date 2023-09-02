package com.example.demo.entities;

public class Bookingrjs {
	
	int service_id;
	int barber_id;
	int customer_id;
	int tid;
	int salon_id;
	String status;
	
	
	
	
	public Bookingrjs() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Bookingrjs(int service_id, int barber_id, int customer_id, int tid, int salon_id, String status) {
		super();
		this.service_id = service_id;
		this.barber_id = barber_id;
		this.customer_id = customer_id;
		this.tid = tid;
		this.salon_id = salon_id;
		this.status = status;
	}
	public int getService_id() {
		return service_id;
	}
	public void setService_id(int service_id) {
		this.service_id = service_id;
	}
	public int getBarber_id() {
		return barber_id;
	}
	public void setBarber_id(int barber_id) {
		this.barber_id = barber_id;
	}
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public int getSalon_id() {
		return salon_id;
	}
	public void setSalon_id(int salon_id) {
		this.salon_id = salon_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	
	
	
	
	
	
	

}
