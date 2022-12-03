package com.assignment.supermarket.manager;

import com.assignment.supermarket.user.User;

import javax.persistence.*;

@Entity
@Table
public class Manager extends User {

//            @SequenceGenerator(
//                    name = "manager_sequence",
//                    sequenceName = "manager_sequence",
//                    allocationSize = 1
//            )
//            @GeneratedValue(
//                    strategy = GenerationType.SEQUENCE,
//
//                    generator = "manager_sequence"
//            )
//    Long managerId;
    public Manager(String username, String phoneNumber, String email, String address,String password){
        super(username,phoneNumber,email,address,password);

    }
    public Manager(){

    }

//    public Long getManagerId() {
//        return managerId;
//    }
//
//    public void setManagerId(Long managerId) {
//        this.managerId = managerId;
//    }
}
