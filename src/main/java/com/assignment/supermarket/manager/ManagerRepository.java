package com.assignment.supermarket.manager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ManagerRepository extends JpaRepository<Manager,Long> {
    @Query("SELECT m FROM Manager m WHERE m.email = ?1")
    Optional<Manager> findManagerByEmail(String email);
}
