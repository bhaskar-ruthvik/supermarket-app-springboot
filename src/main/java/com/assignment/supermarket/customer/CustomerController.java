package com.assignment.supermarket.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/customer")
@CrossOrigin
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getCustomers(){
        return customerService.getCustomers();
    }
    @PostMapping(path="/signin")
    public boolean findCustomer(@RequestBody CustomerSignIn customerSignIn){
        return customerService.findCustomer(customerSignIn);
    }
    @PostMapping
    public Long registerNewCustomer(@RequestBody Customer customer){

        return customerService.addNewCustomer(customer);

    }
    @PutMapping(path="{customerId}")
    public Integer updateCustomer(@PathVariable("customerId")Long id,@RequestParam String password){
        return customerService.updateCustomer(id,password);
    }
    @DeleteMapping(path = "{customerId}")
    public Integer deleteCustomer(@PathVariable("customerId") Long id){
        return customerService.deleteCustomer(id);
    }

}








