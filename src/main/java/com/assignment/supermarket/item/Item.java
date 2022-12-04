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
    private Double price;
    private Double offer;
    private String url1;
    private String url2;
    private String url3;
    private String url4;

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

    public String getUrl2() {
        return url2;
    }

    public void setUrl2(String url2) {
        this.url2 = url2;
    }

    public String getUrl3() {
        return url3;
    }

    public void setUrl3(String url3) {
        this.url3 = url3;
    }

    public String getUrl4() {
        return url4;
    }

    public void setUrl4(String url4) {
        this.url4 = url4;
    }

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



    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Item(Long item_code, String item_name, Integer quantity, Double rating, LocalDate deliveryDate, Double price, Double offer, String url1, String url2, String url3, String url4) {
        this.item_code = item_code;
        this.item_name = item_name;
        this.quantity = quantity;
        this.rating = rating;
        this.deliveryDate = deliveryDate;
        this.price = price;
        this.offer = offer;
        this.url1 = url1;
        this.url2 = url2;
        this.url3 = url3;
        this.url4 = url4;
    }

    public Item(String item_name, Integer quantity, Double rating, LocalDate deliveryDate, Double price, double Dffer, String url1, String url2, String url3, String url4) {
        this.item_name = item_name;
        this.quantity = quantity;
        this.rating = rating;
        this.deliveryDate = deliveryDate;
        this.price = price;
        this.offer = offer;
        this.url1 = url1;
        this.url2 = url2;
        this.url3 = url3;
        this.url4 = url4;
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
