package com.assignment.supermarket.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManagerService {
    private final ManagerRepository managerRepository;

    @Autowired
    public ManagerService(ManagerRepository managerRepository){
        this.managerRepository = managerRepository;
    }
    public List<Manager> getManagers(){
        return managerRepository.findAll();
    }
    public void addNewManager(Manager manager){
        Optional<Manager> managerByEmail = managerRepository.findManagerByEmail(manager.getEmail());
        if(managerByEmail.isPresent()){
            throw new IllegalStateException("Email already taken");
        }
        managerRepository.save(manager);
    }
    public void deleteManager(Long id){
        boolean existsById = managerRepository.existsById(id);
        if(!existsById){
            throw new IllegalStateException("User never existed in the first place!");
        }
        managerRepository.deleteById(id);
    }
}
