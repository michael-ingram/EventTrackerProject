package com.skilldistillery.bandsite.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.bandsite.entities.Concert;
import com.skilldistillery.bandsite.repositories.ConcertRepository;

@Service
public class ConcertServiceImpl implements ConcertService {
	
	@Autowired
	private ConcertRepository repo;
	
	@Override
	public List<Concert> allConcerts() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Concert show(int concertId) {
		Concert concert = null;
		Optional<Concert> concertOpt = repo.findById(concertId);
		if(concertOpt.isPresent()) {
			concert = concertOpt.get();
		}
		return concert;
	}

	@Override
	public Concert create(Concert concert) {
		return repo.saveAndFlush(concert);
	}

	@Override
	public Concert update(int concertId, Concert concert) {
		Optional<Concert> concertOpt = repo.findById(concertId);
		if(concertOpt.isPresent()) {
			Concert updated = concertOpt.get();
			updated.setVenue(concert.getVenue());
			updated.setStreet(concert.getStreet());
			updated.setCity(concert.getCity());
			updated.setState(concert.getState());
			updated.setZip(concert.getZip());
			updated.setConcertDate(concert.getConcertDate());
			updated.setConcertTime(concert.getConcertTime());
			repo.saveAndFlush(updated);
			return updated;
			
		}
		return null;
		
	}

	@Override
	public boolean delete(int concertId) {
		boolean deleted = false;
		if(repo.existsById(concertId)) {
			repo.deleteById(concertId);
			deleted = true;
		}
		return deleted;
	}
	
	

}
