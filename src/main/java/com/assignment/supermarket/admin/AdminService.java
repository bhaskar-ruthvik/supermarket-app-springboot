package com.assignment.supermarket.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminService {
    private final AdminRepository adminRepository;
    @Autowired
    public AdminService(AdminRepository adminRepository){
        this.adminRepository = adminRepository;
    }
    public List<Admin> getAdmins(){


        return adminRepository.findAll();
    }
}
