package com.huertas.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.huertas.mappers.GreetingDao;
import com.huertas.model.Greeting;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class GreetingServiceImp implements GreetingService  {

	
	@Autowired
	GreetingDao greetingDao;

    
	@Override
	public Collection<Greeting> findAll() {
		Collection<Greeting> greetings = greetingDao.findAll();
		return greetings;
	}

	@Override
	public Greeting findOne(Long id) {
		Greeting greeting = greetingDao.findOne(id);
		return greeting;
	}

	@Override
	public void create(Greeting greeting) {
		
		greetingDao.create(greeting);
	}

	@Override
	public long update(Greeting greeting) {
		
		return greetingDao.update(greeting);
		 
	}

	@Override
	public void delete(Greeting greeting) {
		
		greetingDao.delete(greeting);
	}


}
