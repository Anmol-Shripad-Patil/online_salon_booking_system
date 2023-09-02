package com.example.demo.entities;

public class BillingDump {

	
	private int customer_id;
	private float total_amount;
	private int salon_id;
	public BillingDump(int customer_id, float total_amount, int salon_id) {
		super();
		this.customer_id = customer_id;
		this.total_amount = total_amount;
		this.salon_id = salon_id;
	}
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public float getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(float total_amount) {
		this.total_amount = total_amount;
	}
	public int getSalon_id() {
		return salon_id;
	}
	public void setSalon_id(int salon_id) {
		this.salon_id = salon_id;
	}
	
	
	
	
	
}
