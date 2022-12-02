package com.assignment.supermarket.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/cart")
public class CartController{
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping
    public List<Cart> getCarts(){
        return cartService.getCarts();
    }

    @PostMapping
    public void addToCart(@RequestBody Cart cart){
        cartService.addNewCart(cart);
    }

    @DeleteMapping(path = "{cartId}")
    public void deleteCart(@PathVariable("cartId") Long cartId){
        cartService.deleteCart(cartId);

    }

    @PutMapping(path = "{cartId")
    public void updateCart(
      @PathVariable("cartId") Long cartId
    ){cartService.updateCart(cartId);}

}