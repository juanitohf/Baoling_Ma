package com.huertas.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



@Entity
public class Message{

	
	@Id
	@GeneratedValue
	private long messageId;

	private String messageSubject;
	
	private String messageText;
	 
	private String userName;
	
	private String userMail;
	
	/*@Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime")
	private DateTime createDateTime;
	*/

	
	
	
	
	public Message(){
		
	}

	public long getMessageId() {
		return messageId;
	}

	public void setMessageId(long messageId) {
		this.messageId = messageId;
	}

	public String getMessageSubject() {
		return messageSubject;
	}

	public void setMessageSubject(String messageSubject) {
		this.messageSubject = messageSubject;
	}

	public String getMessageText() {
		return messageText;
	}

	public void setMessageText(String messageText) {
		this.messageText = messageText;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserMail() {
		return userMail;
	}

	public void setUserMail(String userMail) {
		this.userMail = userMail;
	}

	@Override
	public String toString() {
		return "Message [messageId=" + messageId + ", messageSubject=" + messageSubject + ", messageText=" + messageText
				+ ", userName=" + userName + ", userMail=" + userMail + "]";
	}

	

	
	
}
