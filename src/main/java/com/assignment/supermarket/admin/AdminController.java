package com.assignment.supermarket.admin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/admin")
public class AdminController {
    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping
    public List<Admin> getAdmins(){
        return adminService.getAdmins();
    }
    @PostMapping
    public void registerNewAdmin(@RequestBody Admin admin){

        adminService.addNewAdmin(admin);
    }
    @DeleteMapping(path = "{adminId}")
    public void deleteAdmin(@PathVariable("adminId") Long id){
        adminService.deleteAdmin(id);
    }
}
