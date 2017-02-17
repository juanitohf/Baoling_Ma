package com.huertas.mappers;

import java.util.Collection;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.huertas.model.Greeting;

@Mapper
public interface GreetingDao {

	
	Collection<Greeting> findAll();
	
	Greeting findOne(@Param(value = "id") Long id);
	
	void create(Greeting greeting);
	
	long update(Greeting greeting);
	
	void delete(Greeting greeting);
	
}
