package com.assignment.supermarket.admin;


import com.assignment.supermarket.user.User;

import javax.persistence.*;

@Entity
@Table
public class Admin extends User {
    @Id
    @SequenceGenerator(
            name = "admin_sequence",
            sequenceName = "admin_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "admin_sequence"
    )
    Long managerId;
    public Admin(){

    }
    public Admin(String username, String phoneNumber, String email, String address){
        super(username,phoneNumber,email,address);
    }

}
