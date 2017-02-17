package com.huertas.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.huertas.model.Greeting;
import com.huertas.service.GreetingService;

@RestController
public class GreetingController {
	
	@Autowired
	private GreetingService greetingService;
	
	
	@RequestMapping(value="/api/greetings", 
					method = RequestMethod.GET, 
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Greeting>> getGreetings(){
		
		Collection<Greeting> greetings = greetingService.findAll();
		
		return new ResponseEntity<Collection<Greeting>>(greetings,HttpStatus.OK);
	}
	
	
	@RequestMapping(value="/api/greetings/{id}",
					method = RequestMethod.GET, 
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Greeting> getGreeting(@PathVariable("id") Long id){
		
		Greeting greeting = greetingService.findOne(id);
		
		if(greeting == null){
			return new ResponseEntity<Greeting>(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity<Greeting>(greeting,HttpStatus.OK);
	}
	
	
	@RequestMapping(value="/api/greetings", 
					method = RequestMethod.POST, 
					consumes = MediaType.APPLICATION_JSON_VALUE,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Greeting> createGreeting(@RequestBody Greeting greeting){
		
		greetingService.create(greeting);
		
		if(greeting.getId() == null){
			return new ResponseEntity<Greeting>(greeting,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Greeting>(greeting,HttpStatus.CREATED);
	}
	
	
	@RequestMapping(value="/api/greetings", 
			method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Greeting> updateGreeting(@RequestBody Greeting greeting){
				
		long rowAffected = greetingService.update(greeting);
		
		
		
		if(rowAffected == 0){
			return new ResponseEntity<Greeting>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Greeting>(HttpStatus.OK);

	}

	@RequestMapping(value="/api/greetings", 
			method = RequestMethod.DELETE, 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Greeting> deletedGreeting(@RequestBody Greeting greeting){
		
	   greetingService.delete(greeting);
	
	   return new ResponseEntity<Greeting>(HttpStatus.NO_CONTENT);
	}
	
}
