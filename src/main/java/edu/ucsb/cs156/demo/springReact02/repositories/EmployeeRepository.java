package edu.ucsb.cs156.demo.springreact02.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.ucsb.cs156.demo.springreact02.entities.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> { 

}