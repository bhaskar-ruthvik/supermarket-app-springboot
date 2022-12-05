package com.assignment.supermarket.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/cart")
@CrossOrigin
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

    @GetMapping(path ="/get/{id}")
    public List<Cart> getCartByCustomerId(@PathVariable("id") Long customerId){
        return cartService.getCartById(customerId);
    }

    @PostMapping
    public Integer addToCart(@RequestBody Cart cart){
        return cartService.addNewCart(cart);
    }

    @DeleteMapping(path = "{cartId}")
    public Integer deleteFromCart(@PathVariable("cartId") Long cartId){
        return cartService.deleteFromCart(cartId);

    }
    @DeleteMapping(path = "delete/{customerId}")
    public Integer deleteCart(@PathVariable("customerId") Long cartId){
        return cartService.deleteFromCart(cartId);

    }

    @PutMapping(path = "{cartId}")
    public void updateCart(
      @PathVariable("cartId") Long cartId
    ){cartService.updateCart(cartId);}

}