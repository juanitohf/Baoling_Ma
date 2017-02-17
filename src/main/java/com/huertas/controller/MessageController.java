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

import com.huertas.model.Message;
import com.huertas.service.MessageService;

@RestController
public class MessageController {
	
	@Autowired
	private MessageService messageService;
	
	
	
	
	
	
		@RequestMapping(value="/api/message", 
			method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
			public ResponseEntity<Collection<Message>> getGreetings(){
			
			Collection<Message> message = messageService.findAll();
			
			return new ResponseEntity<Collection<Message>>(message,HttpStatus.OK);
			}
	
	
	
		@RequestMapping(value="/api/message/{messageId}",
				method = RequestMethod.GET, 
				produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Message> getGreeting(@PathVariable("messageId") Long messageId){
			
			Message greeting = messageService.findOne(messageId);
			
			if(greeting == null){
				return new ResponseEntity<Message>(HttpStatus.NOT_FOUND);
			}
			
			return new ResponseEntity<Message>(greeting,HttpStatus.OK);
		}
	
	
	
	
	
	
	
	
	
	@RequestMapping(value="/api/message", 
					method = RequestMethod.POST, 
					consumes = MediaType.APPLICATION_JSON_VALUE,
					produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Message> createMessage(@RequestBody Message message){
		
		messageService.create(message);
		
		if(message.getMessageId() == 0){
			return new ResponseEntity<Message>(message,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Message>(message,HttpStatus.CREATED);
	}
	
	

	
	@RequestMapping(value="/api/message", 
			method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Message> updateMessage(@RequestBody Message message){
				
		long rowAffected = messageService.update(message);
	
		if(rowAffected == 0){
			return new ResponseEntity<Message>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<Message>(HttpStatus.OK);

	}
	
	
	@RequestMapping(value="/api/message", 
			method = RequestMethod.DELETE, 
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Message> deletedGreeting(@RequestBody Message message){
		
		messageService.delete(message);
	
	   return new ResponseEntity<Message>(HttpStatus.NO_CONTENT);
	}
	
	
	
	
	
	
	
}
