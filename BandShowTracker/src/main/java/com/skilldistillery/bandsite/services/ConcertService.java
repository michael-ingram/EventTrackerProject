package com.skilldistillery.bandsite.services;

import java.util.List;

import com.skilldistillery.bandsite.entities.Concert;

public interface ConcertService {
	
	List<Concert> allConcerts();
	
	Concert show(int concertId);
	
	Concert create(Concert concert);
	
	Concert update(int concertId, Concert concert);
	
	boolean delete(int concertId);
}
