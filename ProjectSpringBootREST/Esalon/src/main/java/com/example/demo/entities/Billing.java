package com.example.demo.entities;




import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "billings")
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int billing_id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    private String billing_date;
    private float total_amount;
    private String payment_status;

    public Billing() {
    }

    public Billing(Customer customer, String billing_date, float total_amount, String payment_status) {
        this.customer = customer;
        this.billing_date = billing_date;
        this.total_amount = total_amount;
        this.payment_status = payment_status;
    }

   
    public int getBilling_id() {
		return billing_id;
	}

	public void setBilling_id(int billing_id) {
		this.billing_id = billing_id;
	}

	public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

	public String getBilling_date() {
		return billing_date;
	}

	public void setBilling_date(String billing_date) {
		this.billing_date = billing_date;
	}

	public float getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(float total_amount) {
		this.total_amount = total_amount;
	}

	public String getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}

  
}

