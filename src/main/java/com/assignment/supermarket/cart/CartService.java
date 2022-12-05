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

    public Integer addNewCart(Cart cart) {
        Optional <Cart> cartById = cartRepository.findCartById(cart.getCustomerId());
        if(cartById.isPresent()&& cartById.get().getItem_code()== cart.getItem_code()){
            return 0;
        }
        cartRepository.save(cart);
        return 1;
    }

    public Integer deleteFromCart(Long cartId){
        boolean exists = cartRepository.existsById(cartId);
        if(!exists){
           return -1;
        }
        cartRepository.deleteById(cartId);
        return 1;
    }
    public Integer deleteCart(Long customerId){
        List<Cart> cartByCustomerId = cartRepository.findCartByCustomerId(customerId);
        for(int i=0; i< cartByCustomerId.size();i++){
            cartRepository.deleteById(cartByCustomerId.get(i).getCartId());
        }

        return 1;
    }
    public List<Cart> getCartById(Long customerId){


            return cartRepository.findCartByCustomerId(customerId);

    }
    @Transactional
    public void updateCart(Long cartId){
        Cart cart = cartRepository.findById(cartId).orElseThrow(()-> new IllegalStateException("does not exist"));

        /*if (name!=null)

        if(
         */
    }
}
