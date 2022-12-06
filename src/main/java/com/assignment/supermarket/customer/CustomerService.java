package com.assignment.supermarket.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
        String emailformat = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        boolean emailIsValid = customer.getEmail().matches(emailformat);
        if(!emailIsValid)
        {
            throw new IllegalStateException("Email has to be of the form: abc@email.xyz ");
        }
        String phoneformat = "^[0-9]{10}$";
        boolean phoneIsValid = customer.getPhoneNumber().matches(phoneformat);
        if(!phoneIsValid)
        {
            throw new IllegalStateException("Phone number has to be a 10 digit number");
        }
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
    @Transactional
    public Integer updateCustomer(Long id, String password){
            if(customerRepository.findById(id).isPresent()){
                Customer customer = customerRepository.findById(id).get();
                customer.setPassword(password);
                return 1;
            }
            return 0;
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
