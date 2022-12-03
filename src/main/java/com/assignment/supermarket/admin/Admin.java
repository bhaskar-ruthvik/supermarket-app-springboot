package com.assignment.supermarket.admin;


import com.assignment.supermarket.user.User;

import javax.persistence.*;

@Entity
@Table
public class Admin extends User {
//    @SequenceGenerator(
//            name = "admin_sequence",
//            sequenceName = "admin_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            strategy = GenerationType.SEQUENCE,
//            generator = "admin_sequence"
//    )
//    Long adminId;
    public Admin(){

    }
    public Admin(String username, String phoneNumber, String email, String address,String password){
        super(username,phoneNumber,email,address,password);
    }

//    public Long getAdminId() {
//        return adminId;
//    }
//
//    public void setAdminId(Long adminId) {
//        this.adminId = adminId;
//    }
}
