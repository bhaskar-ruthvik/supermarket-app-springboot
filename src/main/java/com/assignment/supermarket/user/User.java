package com.assignment.supermarket.user;

public class User {

    private Long userID;
    private String username;

    private String phoneNumber;
    private String email;
    private String address;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getUserID() {
        return userID;
    }

    public User(String username, String phoneNumber, String email, String address) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
    }

    public User(Long userID,String username, String phoneNumber, String email, String address) {
        this.userID = userID;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

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
                ", userID=" + userID +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
