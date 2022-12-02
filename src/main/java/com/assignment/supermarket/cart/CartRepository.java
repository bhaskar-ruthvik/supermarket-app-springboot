package com.assignment.supermarket.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{

    @Query("SELECT s FROM Student s WHERE s.id=?1")
    Optional <Cart> findCartById(Long id);
}