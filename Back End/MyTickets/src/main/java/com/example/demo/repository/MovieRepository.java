package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Movies;

public interface MovieRepository extends JpaRepository<Movies,Integer>{

}
