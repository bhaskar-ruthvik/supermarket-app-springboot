package com.assignment.supermarket.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ManagerService {
    private final ManagerRespository managerRespository;

    @Autowired
    public ManagerService(ManagerRespository managerRespository){
        this.managerRespository = managerRespository;
    }
    public List<Manager> getManagers(){
        return managerRespository.findAll();
    }
}
