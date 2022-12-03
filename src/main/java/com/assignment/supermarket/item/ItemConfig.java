package com.assignment.supermarket.item;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class ItemConfig {

    @Bean
    CommandLineRunner commandLineRunner(ItemRepository repository){
        return args ->  {
            Item lays= new Item(
                    1L,
                    "Lay's Indian magic masala",
                    20,
                    4.5,
                    LocalDate.of(2022, Month.DECEMBER, 20),
                    "Rs. 29"
            );

            Item coke = new Item(
                    2L,
                    "Coca Cola",
                    20,
                    4.99,
                    LocalDate.of(2022, Month.DECEMBER, 20),
                    "Rs. 39"
            );

            Item oreo = new Item(
                    3L,
                    "Oreo Cookies n Cream",
                    20,
                    4.6,
                    LocalDate.of(2022, Month.DECEMBER, 20),
                    "Rs.30"
            );

            Item Haldirams = new Item(
                    4L,
                    "Haldiram's Aloo Bhujia",
                    20,
                    4.2,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.40"
            );

            Item SunflowerOil = new Item(
                    5L,
                    "Fortune Refined Sunflower oil",
                    20,
                    4.1,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.176"
            );

            Item rice = new Item(
                    6L,
                    "Sona Masoori Rice",
                    20,
                    4.6,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.1199"
            );

            Item sugar = new Item(
                    7L,
                    "Sugar",
                    20,
                    4.7,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.37"
            );

            Item atta = new Item(
                    8L,
                    "Aashirvaad Atta 5 kg",
                    20,
                    4.8,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.300"
            );

            Item toothpaste = new Item(
                    9L,
                    "Colgate Charcoal Fresh Toothpaste",
                    20,
                    4.5,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.100"
            );

            Item jam = new Item(
                    10L,
                    "Kissan Mixed fruit Jam, 700g",
                    20,
                    4.3,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    "Rs.220"
            );

            repository.saveAll
                    (List.of(lays, coke,oreo, Haldirams, SunflowerOil,rice, sugar, atta, toothpaste, jam));
        };
    }
}
