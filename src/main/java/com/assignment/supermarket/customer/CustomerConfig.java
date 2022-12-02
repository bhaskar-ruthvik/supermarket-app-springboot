package com.assignment.supermarket.customer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class CustomerConfig {
  @Bean
    CommandLineRunner commandLineRunner(CustomerRepository customerRepository){
      return args -> {
          Customer bhaskar = new Customer("Bhaskar",
                  "9912762200",
                  "sparksteam123@gmail.com",
                  "334ofiojgf",
                  1000);

            customerRepository.saveAll(List.of(bhaskar));
      };
  }
}
