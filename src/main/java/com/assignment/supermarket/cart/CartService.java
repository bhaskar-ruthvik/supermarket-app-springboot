package com.assignment.supermarket.cart;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository ;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public List<Cart> getCarts(){
        return cartRepository.findAll();
    }

    public void addNewCart(Cart cart) {
        Optional <Cart> cartById = cartRepository.findCartById(cart.getId());
        if(cartById.isPresent()){
            throw new IllegalStateException("taken");
        }
        cartRepository.save(cart);
    }

    public void deleteCart(Long cartId){
        boolean exists = cartRepository.existsById(cartId);
        if(!exists){
            throw new IllegalStateException("cart with "+ cartId+ " does not exist");
        }
        cartRepository.deleteById(cartId);
    }

    @Transactional
    public void updateCart(Long cartId){
        Cart cart = cartRepository.findById(cartId).orElseThrow(()-> new IllegalStateException("does not exist"));

        /*if (name!=null)

        if(
         */
    }
}
