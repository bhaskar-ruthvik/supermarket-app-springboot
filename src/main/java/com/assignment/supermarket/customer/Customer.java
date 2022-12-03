package com.assignment.supermarket.customer;
import com.assignment.supermarket.user.User;

import javax.persistence.*;

@Entity
@Table
public class Customer extends User{

//    @SequenceGenerator(
//            name = "customer_sequence",
//            sequenceName = "customer_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            strategy = GenerationType.IDENTITY,
//            generator = "customer_sequence"
//    )
//    String customerId;

    double account_balance;
//    public Customer(String customerId, String username, String phoneNumber, String email, String address,String password,double account_balance){
//        super(username,phoneNumber,email,address,password);
//        this.account_balance = account_balance;
//        this.customerId = customerId;
//    }
    public Customer(String username, String phoneNumber, String email, String address,String password,double account_balance){
        super(username,phoneNumber,email,address,password);
        this.account_balance = account_balance;

    }
    public Customer(Long userId, String password){
        super(userId,password);
    }
    public Customer(){

    }

    @Override
    public String toString() {
        return "Customer{" +
//                "customerId=" + customerId +
                ", account_balance=" + account_balance +
                '}';
    }

    public double getAccount_balance() {
        return account_balance;
    }

    public void setAccount_balance(double account_balance) {
        this.account_balance = account_balance;
    }}

//    public String getCustomerId() {
//        return customerId;
//    }
//
//    public void setCustomerId(String customerId) {
//        this.customerId = customerId;
//    }
//}
