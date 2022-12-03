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
    public Long addNewCustomer(Customer customer){
        Optional<Customer> customerByEmail = customerRepository.findCustomerByEmail(customer.getEmail());
        boolean hasMinimumBalance = CustomerRepository.checkAccountBalance(customer.getAccount_balance());
        if(customerByEmail.isPresent()){
            return -1L;
        }
        if(!hasMinimumBalance){
            return -2L;
        }
        customerRepository.save(customer);
        return customer.getUserID();
    }
    public boolean findCustomer(CustomerSignIn customerSignIn){

        Optional<Customer> customerById = customerRepository.findById(customerSignIn.getId());

        if(customerById.isPresent()){
           return customerSignIn.getPassword().equals(customerById.get().getPassword());
        }
        if(!customerById.isPresent()){
            return false;
        }
        return false;

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
