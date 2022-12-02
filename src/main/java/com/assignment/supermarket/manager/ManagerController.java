package com.assignment.supermarket.manager;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/manager")
public class ManagerController {
    private final ManagerService managerService;

    @Autowired
    public ManagerController(ManagerService managerService) {
        this.managerService = managerService;
    }

    @GetMapping
    public List<Manager> getManagers(){
        return managerService.getManagers();
    }
    @PostMapping
    public void registerNewManager(@RequestBody Manager manager){

        managerService.addNewManager(manager);
    }
    @DeleteMapping(path = "{managerId}")
    public void deleteManager(@PathVariable("managerId") Long id){
        managerService.deleteManager(id);
    }
}
