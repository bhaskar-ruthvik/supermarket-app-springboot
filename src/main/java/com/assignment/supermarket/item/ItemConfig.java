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
                    29.0,
                    0.5,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                        "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"

            );

            Item coke = new Item(
                    2L,
                    "Coca Cola",
                    20,
                    4.99,
                    LocalDate.of(2022, Month.DECEMBER, 20),
                    39.0,
                    0.3,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"

            );

            Item oreo = new Item(
                    3L,
                    "Oreo Cookies n Cream",
                    20,
                    4.6,
                    LocalDate.of(2022, Month.DECEMBER, 20),
                    30.0,
                    0.25,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            Item Haldirams = new Item(
                    4L,
                    "Haldiram's Aloo Bhujia",
                    20,
                    4.2,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    40.0,
                    0.70,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            Item SunflowerOil = new Item(
                    5L,
                    "Fortune Refined Sunflower oil",
                    20,
                    4.1,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    176.0,
                    0.2,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"

            );

            Item rice = new Item(
                    6L,
                    "Sona Masoori Rice",
                    20,
                    4.6,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    1199.0,
                    0.5,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            Item sugar = new Item(
                    7L,
                    "Sugar",
                    20,
                    4.7,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    37.0,
                    0.35,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            Item atta = new Item(
                    8L,
                    "Aashirvaad Atta 5 kg",
                    20,
                    4.8,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    300.0,
                    0.25,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            Item toothpaste = new Item(
                    9L,
                    "Colgate Charcoal Fresh Toothpaste",
                    20,
                    4.5,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    100.0,
                    0.4,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            Item jam = new Item(
                    10L,
                    "Kissan Mixed fruit Jam, 700g",
                    20,
                    4.3,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    220.0,
                    0.45,
                    "https://www.bigbasket.com/media/uploads/p/l/294278_18-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-2_13-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-3_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/294278-4_12-lays-potato-chips-hot-sweet-chilli-flavour-best-quality.jpg"
            );

            repository.saveAll
                    (List.of(lays, coke,oreo, Haldirams, SunflowerOil,rice, sugar, atta, toothpaste, jam));
        };
    }
}
