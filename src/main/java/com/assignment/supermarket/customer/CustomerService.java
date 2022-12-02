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
    public void addNewCustomer(Customer customer){
        Optional<Customer> customerByEmail = customerRepository.findCustomerByEmail(customer.getEmail());
        boolean hasMinimumBalance = CustomerRepository.checkAccountBalance(customer.getAccount_balance());
        if(customerByEmail.isPresent()){
            throw new IllegalStateException("Email already taken");
        }
        if(!hasMinimumBalance){
            throw new IllegalStateException("Not enough Account Balance please add more to your account!");
        }
        customerRepository.save(customer);
    }
    public void deleteCustomer(Long id){
        boolean existsById = customerRepository.existsById(id);

        if(!existsById){
            throw new IllegalStateException("User never existed in the first place!");
        }
        customerRepository.deleteById(id);
    }
}
