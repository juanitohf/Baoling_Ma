package com.huertas.service;

import java.util.Collection;

import com.huertas.model.Message;

public interface MessageService {

	
	Collection<Message> findAll();
	
	Message findOne(Long id);
	
	void create(Message greeting);
	
	long update(Message greeting);
	
	void delete(Message greeting);
}
