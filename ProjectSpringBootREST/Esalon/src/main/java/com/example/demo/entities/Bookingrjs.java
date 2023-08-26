package com.example.demo.entities;

public class Bookingrjs {
	
	int service_id;
	int barber_id;
	int customer_id;
	int tid;
	String status;
	public String booking_date;

	
	public Bookingrjs(int service_id, int barber_id, int customer_id, int slot_id, String status,String booking_date) {
		super();
		this.service_id = service_id;
		this.barber_id = barber_id;
		this.customer_id = customer_id;
		this.tid = slot_id;
		this.status = status;
		this.booking_date=booking_date;
	}





	public String getBooking_date() {
		return booking_date;
	}





	public void setBooking_date(String booking_date) {
		this.booking_date = booking_date;
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





	public String getStatus() {
		return status;
	}





	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
	

}
