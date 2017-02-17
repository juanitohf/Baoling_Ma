package com.huertas.mappers;

import java.util.Collection;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.huertas.model.Message;

@Mapper
public interface MessageDao {

	
	Collection<Message> findAll();
	
	Message findOne(@Param(value = "messageId") long messageid);
	
	void create(Message message);
	
	long update(Message message);
	
	void delete(Message message);
	
}
