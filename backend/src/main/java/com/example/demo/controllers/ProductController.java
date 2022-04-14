package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.services.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	ProductService pservice;
	
	
	@GetMapping("/showProduct")
	public List<Product> showProduct()
	{
		return pservice.getAll();
	}
	
	@PostMapping("/insertProduct")
	public Product insertProduct(@RequestBody Product p)
	{
		return pservice.save(p);
	}
	
}
