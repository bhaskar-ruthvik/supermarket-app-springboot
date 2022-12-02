package com.assignment.supermarket.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public void addNewAdmin(Admin admin){
        Optional<Admin> adminByEmail = adminRepository.findAdminByEmail(admin.getEmail());
        if(adminByEmail.isPresent()){
            throw new IllegalStateException("Email already taken");
        }
        adminRepository.save(admin);
    }
    public void deleteAdmin(Long id){
        boolean existsById = adminRepository.existsById(id);
        if(!existsById){
            throw new IllegalStateException("User never existed in the first place!");
        }
        adminRepository.deleteById(id);
    }

}
