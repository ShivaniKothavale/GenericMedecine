package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "shipper")
@PrimaryKeyJoinColumn(name = "shid", referencedColumnName = "uid")
public class Shippers extends Users
{
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	String gender;
	
	@Column(unique=true)
	int shopid;

	
	public Shippers() {
		super();
	}




	public Shippers(String userid, String password, String email, String contact, String area, String city,
			String pincode, String usertype, String fname, String lname, String gender, int shopid) {
		super(userid, password, email, contact, area, city, pincode, usertype);
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.shopid = shopid;
	}
	
	




	public String getFname() {
		return fname;
	}




	public void setFname(String fname) {
		this.fname = fname;
	}




	public String getLname() {
		return lname;
	}




	public void setLname(String lname) {
		this.lname = lname;
	}




	public String getGender() {
		return gender;
	}




	public void setGender(String gender) {
		this.gender = gender;
	}




	public int getShopid() {
		return shopid;
	}




	public void setShopid(int shopid) {
		this.shopid = shopid;
	}




	@Override
	public String toString() {
		return "Shippers [fname=" + fname + ", lname=" + lname + ", gender=" + gender + ", shopper=" + shopid + "]";
	}

	
}
