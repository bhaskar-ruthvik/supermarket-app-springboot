package com.assignment.supermarket.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
    @Transactional
    public Integer updateManager(Long id, String password){
        if(managerRepository.findById(id).isPresent()){
            Manager manager = managerRepository.findById(id).get();
            manager.setPassword(password);
            return 1;
        }
        return 0;
    }
    public Integer deleteManager(Long id){
        boolean existsById = managerRepository.existsById(id);

        if(!existsById){
            return 0;
        }
        managerRepository.deleteById(id);
        return 1;
    }
}
