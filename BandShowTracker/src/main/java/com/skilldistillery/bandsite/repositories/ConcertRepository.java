package com.skilldistillery.bandsite.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.bandsite.entities.Concert;

public interface ConcertRepository extends JpaRepository<Concert, Integer>{
	
}
