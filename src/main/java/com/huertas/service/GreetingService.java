package com.huertas.service;

import java.util.Collection;

import com.huertas.model.Greeting;

public interface GreetingService {

	
	Collection<Greeting> findAll();
	
	Greeting findOne(Long id);
	
	void create(Greeting greeting);
	
	long update(Greeting greeting);
	
	void delete(Greeting greeting);
}
