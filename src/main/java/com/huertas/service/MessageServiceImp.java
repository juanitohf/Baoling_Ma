package com.huertas.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.huertas.mappers.MessageDao;
import com.huertas.model.Message;

@Service
@Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
public class MessageServiceImp implements MessageService  {

	
	@Autowired
	MessageDao messageDao;

    
	@Override
	public Collection<Message> findAll() {
		Collection<Message> message = messageDao.findAll();
		return message;
	}

	@Override
	public Message findOne(Long messageId) {
		Message message = messageDao.findOne(messageId);
		return message;
	}

	@Override
	public void create(Message message) {
		messageDao.create(message);
	}

	@Override
	public long update(Message message) {
		return messageDao.update(message);
		 
	}

	@Override
	public void delete(Message message) {
		messageDao.delete(message);
	}


}
