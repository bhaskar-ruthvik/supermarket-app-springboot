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
    public Long addNewAdmin(Admin admin){
        Optional<Admin> adminByEmail = adminRepository.findAdminByEmail(admin.getEmail());
        if(adminByEmail.isPresent()){
            return -1L;
        }
        adminRepository.save(admin);
        return admin.getUserID();
    }
    public boolean findAdmin(AdminSignIn adminSignIn){

        Optional<Admin> adminById = adminRepository.findById(adminSignIn.getId());

        if(adminById.isPresent()){
            return adminSignIn.getPassword().equals(adminById.get().getPassword());
        }
        if(!adminById.isPresent()){
            return false;
        }
        return false;

    }
    public void deleteAdmin(Long id){
        boolean existsById = adminRepository.existsById(id);
        if(!existsById){
            throw new IllegalStateException("User never existed in the first place!");
        }
        adminRepository.deleteById(id);
    }

}
