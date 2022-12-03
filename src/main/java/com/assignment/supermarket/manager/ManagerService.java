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
    public Long addNewManager(Manager manager){
        Optional<Manager> managerByEmail = managerRepository.findManagerByEmail(manager.getEmail());
        if(managerByEmail.isPresent()){
            return -1L;
        }
        managerRepository.save(manager);
        return manager.getUserID();
    }
    public boolean findManager(ManagerSignIn managerSignIn){

        Optional<Manager> managerById = managerRepository.findById(managerSignIn.getId());

        if(managerById.isPresent()){
            return managerSignIn.getPassword().equals(managerById.get().getPassword());
        }
        if(!managerById.isPresent()){
            return false;
        }
        return false;

    }
    public void deleteManager(Long id){
        boolean existsById = managerRepository.existsById(id);
        if(!existsById){
            throw new IllegalStateException("User never existed in the first place!");
        }
        managerRepository.deleteById(id);
    }
}
