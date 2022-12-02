package com.assignment.supermarket.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long> {
    @Query("SELECT a FROM Admin a WHERE a.email = ?1")
    Optional<Admin> findAdminByEmail(String email);
}
