package com.assignment.supermarket.item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemRepository
        extends JpaRepository<Item, Long> {

    @Query("SELECT c FROM Item c WHERE c.id = ?1")
    Optional<Item> findItemByID(Long id);
}
