package com.assignment.supermarket.orders;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table

public class Orders{

    @Id
    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )
    private Long order_code;
    private String item_name;

    private Long customer_id;
    private Long item_code;

    public Long getOrder_code() {
        return order_code;
    }

    public void setOrder_code(Long order_code) {
        this.order_code = order_code;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public Long getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(Long customer_id) {
        this.customer_id = customer_id;
    }

    public Long getItem_code() {
        return item_code;
    }

    public void setItem_code(Long item_code) {
        this.item_code = item_code;
    }

    private Long order_id;
    private Integer quantity;
    private Double rating;
    private LocalDate deliveryDate;
    private Double price;
    private Double offer;
    private String url1;

    public Double getOffer_price() {
        return Math.round((1-this.offer)*this.price*100)/100.0;
    }

    public void setOffer_price(Double offer_price) {
        this.offer_price = offer_price;
    }

    @Transient
    private Double offer_price;
    public Double getOffer() {
        return offer;
    }

    public void setOffer(Double offer) {
        this.offer = offer;
    }

    public String getUrl1() {
        return url1;
    }

    public void setUrl1(String url1) {
        this.url1 = url1;
    }

    public Orders() {
    }

    public Long getorder_id() {
        return order_id;
    }

    public void setorder_id(Long order_id) {
        this.order_id = order_id;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Orders(Long order_code, String item_name, Long customer_id, Long item_code, Long order_id, Integer quantity, Double rating, LocalDate deliveryDate, Double price, Double offer, String url1) {
        this.order_code = order_code;
        this.item_name = item_name;
        this.customer_id = customer_id;
        this.item_code = item_code;
        this.order_id = order_id;
        this.quantity = quantity;
        this.rating = rating;
        this.deliveryDate = deliveryDate;
        this.price = price;
        this.offer = offer;
        this.url1 = url1;
    }

    public Orders(String item_name, Long customer_id, Long item_code, Long order_id, Integer quantity, Double rating, LocalDate deliveryDate, Double price, Double offer, String url1) {
        this.item_name = item_name;
        this.customer_id = customer_id;
        this.item_code = item_code;
        this.order_id = order_id;
        this.quantity = quantity;
        this.rating = rating;
        this.deliveryDate = deliveryDate;
        this.price = price;
        this.offer = offer;
        this.url1 = url1;
    }




    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }
}