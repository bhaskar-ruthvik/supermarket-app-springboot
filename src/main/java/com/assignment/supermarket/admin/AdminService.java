package com.assignment.supermarket.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
    @Transactional
    public Integer updateAdmin(Long id, String password){
        if(adminRepository.findById(id).isPresent()){
            Admin admin = adminRepository.findById(id).get();
            admin.setPassword(password);
            return 1;
        }
        return 0;
    }
    public Integer deleteAdmin(Long id){
        boolean existsById = adminRepository.existsById(id);

        if(!existsById){
            return 0;
        }
        adminRepository.deleteById(id);
        return 1;
    }

}
