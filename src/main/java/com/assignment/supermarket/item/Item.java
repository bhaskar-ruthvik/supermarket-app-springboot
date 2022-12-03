package com.assignment.supermarket.item;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table

public class Item {

    @Id
    @SequenceGenerator(
            name = "item_sequence",
            sequenceName = "item_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "item_sequence"
    )
    private Long item_code;
    private String item_name;
//    private List<ItemImage> ie;
//
//
//
//    public List<ItemImage> getIe() {
//        return ie;
//    }
//
//    public void setIe(List<ItemImage> ie) {
//        this.ie = ie;
//    }

    private Integer quantity;
    private Double rating;
    private LocalDate deliveryDate;
    private String price;

    public Item() {
    }

    public Long getItem_code() {
        return item_code;
    }

    public void setItem_code(Long item_code) {
        this.item_code = item_code;
    }






    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }



    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Item(Long item_code, String item_name, Integer quantity, Double rating, LocalDate deliveryDate, String price) {
        this.item_code = item_code;
        this.item_name = item_name;

        this.quantity = quantity;
        this.rating = rating;
        this.deliveryDate = deliveryDate;
        this.price = price;
    }

    public Item(String item_name, Integer quantity, Double rating, LocalDate deliveryDate, String price) {
        this.item_name = item_name;

        this.quantity = quantity;
        this.rating = rating;
        this.deliveryDate = deliveryDate;
        this.price = price;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
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
