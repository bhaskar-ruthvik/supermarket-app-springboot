package com.assignment.supermarket.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/orders")
@CrossOrigin
public class OrdersController {

    private final OrdersService orderservice;

    @Autowired
    public OrdersController(OrdersService orderservice) {
        this.orderservice = orderservice;
    }

    @GetMapping
    public List<Orders> getOrders() {
        return orderservice.getOrders();
    }
    @GetMapping(path ="/get/{id}")
    public List<Orders> getOrderByCustomerId(@PathVariable("id") Long customerId){
        return orderservice.getOrderById(customerId);
    }
    @GetMapping(path = "{orderid}")
    public Orders getOrder(@PathVariable("orderid") Long id) {
        return orderservice.getOrder(id);
    }

    @PostMapping
    public Integer registerNewOrder(@RequestBody Orders order) {
        return  orderservice.addNewOrder(order);
    }

    @PutMapping(path = "{orderId}")
    public Integer updateOrder(@PathVariable("orderId") String id, @RequestParam(required = false) String name, @RequestParam(required = false) String deliveryDate, @RequestParam(required = false) String quantity, @RequestParam(required = false) String price, @RequestParam(required = false) String offer, @RequestParam(required = false) String rating) {
        return orderservice.updateOrder(id, name, deliveryDate, quantity, price, offer, rating);
    }
}

