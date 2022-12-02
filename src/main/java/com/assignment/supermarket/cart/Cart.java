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

    private long id;
    private String name;
    private Boolean isNew;
    private Double rating;
    private LocalDate date;
    private Integer price;
    private long customerId;

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public Cart(long id, String name, Boolean isNew, Double rating, LocalDate date, Integer price, long customerId){
        this.id = id;
        this.name = name;
        this.isNew = isNew;
        this.rating = rating;
        this.date = date;
        this.price = price;
        this.customerId = customerId;
    }

    public Cart(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getNew() {
        return isNew;
    }

    public void setNew(Boolean aNew) {
        isNew = aNew;
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

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "cartId = " + cartId + ", " +
                "id = " + id + ", " +
                "name = " + name + ", " +
                "isNew = " + isNew + ", " +
                "rating = " + rating + ", " +
                "date = " + date + ", " +
                "price = " + price + ", " +
                "customerId = " + customerId + ")";
    }
}