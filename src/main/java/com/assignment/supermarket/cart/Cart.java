package com.assignment.supermarket.cart;


import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
public class Cart{
    @Id
    @SequenceGenerator(
            name = "cart_sequence",
            sequenceName = "cart_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "cart_sequence"
    )
    Long cartId;
    Integer quantity;
    private Long item_code;

    public Cart(Long cartId, Integer quantity, Long item_code, String name, Double rating, LocalDate date, LocalDate deliveryDate, Double price, Double offer, String url1, Double offer_price, Long customerId) {
        this.cartId = cartId;
        this.quantity = quantity;
        this.item_code = item_code;
        this.name = name;
        this.rating = rating;
        this.date = date;
        this.deliveryDate = deliveryDate;
        this.price = price;
        this.offer = offer;
        this.url1 = url1;
        this.offer_price = offer_price;
        this.customerId = customerId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    private String name;

    private Double rating;
    private LocalDate date;

    private LocalDate deliveryDate;
    private Double price;

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

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

    public Double getOffer_price() {
        return offer_price;
    }

    public void setOffer_price(Double offer_price) {
        this.offer_price = offer_price;
    }

    private Double offer;
    private String url1;
    private Double offer_price;
    private Long customerId;

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }


//    public Cart(long cartId, String name, Double rating, LocalDate date, Double price, long customerId){
//
//        this.name = name;
//        this.rating = rating;
//        this.date = date;
//        this.price = price;
//        this.customerId = customerId;
//    }

    public Cart(){

    }

    public void setItem_code(Long item_code){
        this.item_code = item_code;
    }
    public Long getItem_code(){
        return item_code;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + cartId +
                ", item_code=" + item_code +
                ", name='" + name + '\'' +
                ", rating=" + rating +
                ", date=" + date +
                ", deliveryDate=" + deliveryDate +
                ", price=" + price +
                ", offer=" + offer +
                ", url1='" + url1 + '\'' +
                ", offer_price=" + offer_price +
                ", customerId=" + customerId +
                '}';
    }
}