package com.assignment.supermarket.admin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/admin")
@CrossOrigin
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
    @PostMapping(path="/signin")
    public boolean findAdmin(@RequestBody AdminSignIn adminSignIn){
        return adminService.findAdmin(adminSignIn);
    }
    @PostMapping
    public Long registerNewAdmin(@RequestBody Admin admin){

        return adminService.addNewAdmin(admin);
    }
    @PutMapping(path="{adminId}")
    public Integer updateAdmin(@PathVariable("adminId")Long id,@RequestParam String password){
        return adminService.updateAdmin(id,password);
    }
    @DeleteMapping(path = "{adminId}")
    public Integer deleteAdmin(@PathVariable("adminId") Long id){
       return adminService.deleteAdmin(id);
    }
}
