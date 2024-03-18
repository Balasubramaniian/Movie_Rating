package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Movie")
public class Movies {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int sno;
	@Column(name="moviename")
	private String MovieName;
	@Column(name="rating")
	private float rating;
	@Column(name="Images")
	private String images;
	@Column(name="Moviedesc")
	private String MovieDesc;
	@Column(name="trailer")
	private String trailer;
	@Column(name="Count")
	private int count=0;
	
	
	public Movies() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Movies(int sno, String movieName, float rating, String images, String movieDesc, String trailer,int count) {
		super();
		this.sno = sno;
		MovieName = movieName;
		this.rating = rating;
		this.images = images;
		MovieDesc = movieDesc;
		this.trailer = trailer;
		this.count=count;
	}
	
	
	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getMovieName() {
		return MovieName;
	}
	public void setMovieName(String movieName) {
		MovieName = movieName;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public String getImages() {
		return images;
	}
	public void setImages(String images) {
		this.images = images;
	}
	public String getMovieDesc() {
		return MovieDesc;
	}
	public void setMovieDesc(String movieDesc) {
		MovieDesc = movieDesc;
	}
	public String getTrailer() {
		return trailer;
	}
	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}

	@Override
	public String toString() {
		return "Movies [sno=" + sno + ", MovieName=" + MovieName + ", rating=" + rating + ", images=" + images
				+ ", MovieDesc=" + MovieDesc + ", trailer=" + trailer + ", count=" + count + "]";
	}
	

	

}
