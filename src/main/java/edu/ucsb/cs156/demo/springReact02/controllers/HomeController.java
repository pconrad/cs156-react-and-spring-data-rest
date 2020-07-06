package edu.ucsb.cs156.demo.springreact02.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping(value = "/") 
	public String index() {
		return "index"; 
	}

}