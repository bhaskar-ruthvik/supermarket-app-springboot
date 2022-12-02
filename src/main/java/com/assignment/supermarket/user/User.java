package com.assignment.supermarket.user;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class User {

//    private Long userID;
    private String username;

    private String phoneNumber;
    private String email;
    private String address;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

//    public Long getUserID() {
//        return userID;
//    }

    public User(String username, String phoneNumber, String email, String address,String password) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.password= password;
    }
    public User(){

    }
//    public User(Long userID,String username, String phoneNumber, String email, String address) {
//        this.userID = userID;
//        this.username = username;
//        this.phoneNumber = phoneNumber;
//        this.email = email;
//        this.address = address;
//    }

//    public void setUserID(Long userID) {
//        this.userID = userID;
//    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
