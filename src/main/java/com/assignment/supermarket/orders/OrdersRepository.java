package com.assignment.supermarket.orders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrdersRepository
        extends JpaRepository<Orders, Long> {

    @Query("SELECT c FROM Orders c WHERE c.order_id = ?1")
    Optional<Orders> findOrderByID(Long order_id);

    @Query("SELECT c from Orders c WHERE c.customer_id = ?1")
    List<Orders> findOrderByCustomerId(Long customer_id);
}

