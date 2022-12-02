package com.assignment.supermarket.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;
    @Autowired
    public CustomerService(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }
    public List<Customer> getCustomers(){
        return customerRepository.findAll();
    }
    public Integer addNewCustomer(Customer customer){
        Optional<Customer> customerByEmail = customerRepository.findCustomerByEmail(customer.getEmail());
        boolean hasMinimumBalance = CustomerRepository.checkAccountBalance(customer.getAccount_balance());
        if(customerByEmail.isPresent()){
            return 100;
        }
        if(!hasMinimumBalance){
            return 101;
        }
        customerRepository.save(customer);
        return 1;
    }
    public Integer deleteCustomer(Long id){
        boolean existsById = customerRepository.existsById(id);

        if(!existsById){
            return 0;
        }
        customerRepository.deleteById(id);
        return 1;
    }
}
