package com.assignment.supermarket.user;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public List<User> getUsers(){
        return List.of(
                new User(
                        203L,
                        "Bhaskar Ruthvik",
                        "7013125327",
                        "ruthvikcoool@gmail.com",
                        "7-2/57,Villa no. 57, Prime Meadows, Bachupally, Hyderabad - 500090"

                )
        );
    }
}
