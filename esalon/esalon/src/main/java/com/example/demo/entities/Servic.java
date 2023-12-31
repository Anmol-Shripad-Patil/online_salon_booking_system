package com.example.demo.entities;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "services")
public class Servic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "serviceID")
    private int service_iD;

    @Column(name = "service_name")//, length = 44, nullable = false)
    private String serviceName;

    @Column(name = "price")//, precision = 7, scale = 2, nullable = false)
    private float price;

    @Column(name = "description")//, length = 255, nullable = false)
    private String description;

    public Servic() {
    }

	public Servic(int serviceID, String serviceName, float price, String description) {
		super();
		this.service_iD = serviceID;
		this.serviceName = serviceName;
		this.price = price;
		this.description = description;
	}

	

	public int getService_iD() {
		return service_iD;
	}

	public void setService_iD(int service_iD) {
		this.service_iD = service_iD;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    
    

   
}

