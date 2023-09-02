package com.example.demo.entities;

public class BarberReg {

	private int salon_id;
	private String barber_name;
	private int age;
	private String gender;
	
	
	public BarberReg(int salon_id, String barber_name, int age, String gender) {
		super();
		this.salon_id = salon_id;
		this.barber_name = barber_name;
		this.age = age;
		this.gender = gender;
	}


	public int getSalon_id() {
		return salon_id;
	}


	public void setSalon_id(int salon_id) {
		this.salon_id = salon_id;
	}


	public String getBarber_name() {
		return barber_name;
	}


	public void setBarber_name(String barber_name) {
		this.barber_name = barber_name;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
}
