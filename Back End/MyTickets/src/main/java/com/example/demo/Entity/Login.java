package com.example.demo.Entity;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@Column(name="Username")
	private String Username;
	@Column(name="password")
	private String Password;
	
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public Login(Long id, String username, String password) {
		super();
		this.id = id;
		Username = username;
		Password = password;
	}

	@Override
	public String toString() {
		return "Login [id=" + id + ", Username=" + Username + ", Password=" + Password + "]";
	}

}
