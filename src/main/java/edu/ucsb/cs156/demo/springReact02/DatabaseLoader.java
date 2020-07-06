package edu.ucsb.cs156.demo.springreact02;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import edu.ucsb.cs156.demo.springreact02.entities.Employee;
import edu.ucsb.cs156.demo.springreact02.repositories.EmployeeRepository;


@Component
public class DatabaseLoader implements CommandLineRunner { 

	private final EmployeeRepository repository;

	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception { 
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
	}
}