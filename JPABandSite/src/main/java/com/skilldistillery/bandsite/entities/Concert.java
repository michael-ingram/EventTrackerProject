package com.skilldistillery.bandsite.entities;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Concert {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="venue")
	private String venue;
	
	@Column(name="street")
	private String street;
	
	@Column(name="city")
	private String city;
	
	@Column(name="state")
	private String state;
	
	@Column(name="zipcode")
	private String zip;
	
	@Column(name="concert_date")
	private LocalDate concertDate;
	
	@Column(name="concert_time")
	private LocalTime concertTime;

	public Concert() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public LocalDate getConcertDate() {
		return concertDate;
	}

	public void setConcertDate(LocalDate concertDate) {
		this.concertDate = concertDate;
	}

	public LocalTime getConcertTime() {
		return concertTime;
	}

	public void setConcertTime(LocalTime concertTime) {
		this.concertTime = concertTime;
	}

	@Override
	public String toString() {
		return "Concert [id=" + id + ", venue=" + venue + ", street=" + street + ", city=" + city + ", state=" + state
				+ ", zip=" + zip + ", concertDate=" + concertDate + ", concertTime=" + concertTime + "]";
	}
	
	
	
	
}
