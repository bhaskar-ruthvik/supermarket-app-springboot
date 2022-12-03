package com.assignment.supermarket.item;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.time.LocalDate;

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
    private Long id;
    private String name;
    private Boolean isNew;
    private Double rating;
    private LocalDate date;
    private String price;

    public Item() {
    }

    public Item(Long id, String name, Boolean isNew, Double rating, LocalDate date, String price) {
        this.id = id;
        this.name = name;
        this.isNew = isNew;
        this.rating = rating;
        this.date = date;
        this.price = price;
    }

    public Item(String name, Boolean isNew, Double rating, LocalDate date, String price) {

        this.name = name;
        this.isNew = isNew;
        this.rating = rating;
        this.date = date;
        this.price = price;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", isNew=" + isNew +
                ", rating=" + rating +
                ", date=" + date +
                ", price=" + price +
                '}';
    }
}
