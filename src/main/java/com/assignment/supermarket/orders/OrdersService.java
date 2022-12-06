package com.assignment.supermarket.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class OrdersService {

    private final OrdersRepository orderRepository;

    @Autowired
    public OrdersService(OrdersRepository orderRepository)
    {
        this.orderRepository = orderRepository;
    }
    public List<Orders> getOrders()
    {
        return orderRepository.findAll();

    }

    public Integer addNewOrder(Orders order) {
        Optional<Orders> OrderByID = orderRepository.findOrderByID(order.getorder_id());
        if(OrderByID.isPresent())
        {
           return -1;
        }
        orderRepository.save(order);
        return 1;
    }

    public Orders getOrder(Long order_id){
        Optional<Orders> OrderByID = orderRepository.findOrderByID(order_id);
        if(OrderByID.isPresent()){
            return OrderByID.get();
        }
        return null;
    }

    @Transactional
    public Integer updateOrder(String customer_id, String name,String deliveryD,String quantitys,String prices,String offers,String ratings){
        Long id = Long.parseLong(customer_id);





        if(orderRepository.findById(id).isPresent()){
            Orders order = orderRepository.findById(id).get();

            if(name!=null&& name.length()!=0){
                order.setItem_name(name);
            }
            if(deliveryD!=null){
                LocalDate date = LocalDate.parse(deliveryD);
                order.setDeliveryDate(date);
            }
            if(quantitys!=null){
                Integer quantity = Integer.parseInt(quantitys);
                order.setQuantity(quantity);
            }
            if(prices!=null){
                Double price = Double.parseDouble(prices);
                order.setPrice(price);
            }
            if(offers!=null){
                Double offer = Double.parseDouble(offers);
                order.setOffer(offer);
            }
            if(ratings!=null){
                Double rating = Double.parseDouble(ratings);
                order.setRating(rating);
            }

            return 1;
        }
        return 0;
    }
    public List<Orders> getOrderById(Long customerId){


        return orderRepository.findOrderByCustomerId(customerId);

    }
    public Integer deleteOrder(Long id) {
        orderRepository.findOrderByID(id);
        boolean exists = orderRepository.existsById(id);
        if(!exists)
        {
            return 0;
        }
        orderRepository.deleteById(id);
        return 1;
    }
}