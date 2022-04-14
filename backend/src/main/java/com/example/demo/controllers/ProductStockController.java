package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Product;
import com.example.demo.entities.ProductStock;
import com.example.demo.services.ProductStockServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductStockController {
	
	
	@Autowired
	ProductStockServices pservices;
	
	
	@GetMapping("/showProductStock")
	public List<ProductStock> showProductStock()
	{
		return pservices.getAll();
	}
	
	
	@GetMapping("/showAllProductStock")
	public List<ProductStock> showAllProductStock()
	{
		return pservices.getAllProduct();
	}
	
	
	@PostMapping("/insertProductStock")
	public ProductStock insertProduct(@RequestBody ProductStock p)
	{
		return pservices.save(p);
	}

}
