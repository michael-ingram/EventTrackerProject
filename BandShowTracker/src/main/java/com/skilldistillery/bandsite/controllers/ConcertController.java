package com.skilldistillery.bandsite.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.bandsite.entities.Concert;
import com.skilldistillery.bandsite.services.ConcertService;

@CrossOrigin({"*", "http://localhost:4210"})
@RequestMapping("api")
@RestController
public class ConcertController {
	@Autowired
	private ConcertService svc;
	
	@GetMapping("Concerts")
	public List<Concert> listConerts(){
		return svc.allConcerts();
	}
	
	@GetMapping("Concerts/{concertId}")
	public Concert showConcert(@PathVariable Integer concertId, HttpServletResponse res) {
		Concert concert = svc.show(concertId);
		if(concert == null) {
			res.setStatus(404);
		}
		return concert;
		
	}
	
	@PostMapping("Concerts")
	public Concert createConcert(@RequestBody Concert concert, HttpServletRequest req,
			HttpServletResponse res) {
			try {
				concert = svc.create(concert);
				res.setStatus(201);
				StringBuffer url = req.getRequestURL();
				url.append("/").append(concert.getId());
				res.setHeader("Location", url.toString() );
			}catch(Exception e) {
				res.setStatus(400);
			}
			return concert;
	}
	
	@PutMapping("Concerts/{concertId}")
	public Concert updateConcert(@PathVariable Integer concertId, @RequestBody Concert concert, HttpServletResponse res) {
		try {
			concert = svc.update(concertId, concert);
			if(concert ==null) {
				res.setStatus(404);
			}
			else {
				res.setStatus(200);
			}
		}catch(Exception e) {
			res.setStatus(400);
			concert =null;
		}
		return concert;
	}
	
	@DeleteMapping("Concerts/{concertId}")
	public void deleteConcert(@PathVariable Integer concertId, HttpServletResponse res) {
		try {
			boolean deleted = svc.delete(concertId);
			if(deleted) {
				res.setStatus(204);
			}
			else {
				res.setStatus(404);
				}
			}
			catch(Exception e ) {
				res.setStatus(400);
			}
		}
	
}

