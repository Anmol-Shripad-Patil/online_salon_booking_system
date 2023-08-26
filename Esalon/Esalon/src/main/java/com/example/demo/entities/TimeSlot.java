package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "time_slots")
public class TimeSlot {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private int tid;

    @Column(name = "start_time", nullable = false)
    private String start_time;

    @Column(name = "end_time", nullable = false)
    private String end_time;

    public TimeSlot() {
    }

    public TimeSlot(String start_time, String End_time) {
		super();
		this.start_time = start_time;
		this.end_time = End_time;
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

	@Override
	public String toString() {
		return "TimeSlot [tid=" + tid + ", start_time=" + start_time + ", end_time=" + end_time + "]";
	}
    
    
	
	
	


}

