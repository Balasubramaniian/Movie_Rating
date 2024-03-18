package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Login;
import com.example.demo.Entity.Movies;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.MovieRepository;

@RestController
@CrossOrigin
@RequestMapping("/movies")
public class MovieContoller {
	
	@Autowired
	MovieRepository repo;
	@Autowired
	LoginRepository logrepo;
	
	@GetMapping("/login")
	public List<Login> getUsers(){
		List<Login> users=logrepo.findAll();
		return users;
	}
	@PostMapping("/signup")
	public void createuser(@RequestBody Login login) {
		logrepo.save(login);
	}
	
	
	@GetMapping()
	public List<Movies> getAllStudents(){
		List<Movies> Movies=repo.findAll();
		return Movies;
	}
	
	@PostMapping()
	public void Create(@RequestBody Movies movie) {
		repo.save(movie);
	}
	
	@GetMapping("/{id}")
	public Movies getMovie(@PathVariable int id){
		Movies movie=repo.findById(id).get();
		return movie;
	}
	int count=0;
	float rating=0.f;
	@PutMapping("/rating/{id}")
	public Movies rateMovie(@PathVariable int id,@RequestBody Movies movie) {
		count=movie.getCount();
		count=count+1;
        rating=rating+movie.getRating();
        rating=rating/count;
		movie.setRating(rating);
		movie.setCount(count);	
     	return repo.save(movie);
	}

}
