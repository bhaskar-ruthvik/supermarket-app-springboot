package com.assignment.supermarket.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{

    @Query("SELECT c FROM Cart c WHERE c.id=?1")
    Optional <Cart> findCartById(Long id);
    @Query("SELECT c FROM Cart c WHERE c.customerId=?1")
    List<Cart> findCartByCustomerId(Long customerId);
}