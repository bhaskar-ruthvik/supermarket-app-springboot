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
                    "https://www.bigbasket.com/media/uploads/p/l/251023_11-coca-cola-soft-drink-original-taste.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/251023-2_7-coca-cola-soft-drink-original-taste.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/251023-3_7-coca-cola-soft-drink-original-taste.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/251023-4_5-coca-cola-soft-drink-original-taste.jpg"

            );

            Item oreo = new Item(
                    3L,
                    "Oreo Cookies n Cream",
                    20,
                    4.6,
                    LocalDate.of(2022, Month.DECEMBER, 20),
                    30.0,
                    0.25,
                    "https://www.bigbasket.com/media/uploads/p/l/277584_30-cadbury-oreo-creme-biscuit-vanilla-original.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/277584-4_10-cadbury-oreo-creme-biscuit-vanilla-original.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/277584-5_9-cadbury-oreo-creme-biscuit-vanilla-original.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/277584-9_2-cadbury-oreo-creme-biscuit-vanilla-original.jpg"
            );

            Item Haldirams = new Item(
                    4L,
                    "Haldiram's Aloo Bhujia",
                    20,
                    4.2,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    40.0,
                    0.70,
                    "https://www.bigbasket.com/media/uploads/p/l/264454_1-haldirams-namkeen-aloo-bhujia.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/264454-2_1-haldirams-namkeen-aloo-bhujia.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/264454-3_1-haldirams-namkeen-aloo-bhujia.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/264454-4_1-haldirams-namkeen-aloo-bhujia.jpg"
            );

            Item SunflowerOil = new Item(
                    5L,
                    "Fortune Refined Sunflower oil",
                    20,
                    4.1,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    176.0,
                    0.2,
                    "https://www.bigbasket.com/media/uploads/p/l/1204455-2_1-fortune-sunflower-refined-oil-sun-lite.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/1204455-4_1-fortune-sunflower-refined-oil-sun-lite.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/1204455-5_1-fortune-sunflower-refined-oil-sun-lite.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/1204455-6_1-fortune-sunflower-refined-oil-sun-lite.jpg"

            );

            Item rice = new Item(
                    6L,
                    "Sona Masoori Rice, 10kg",
                    20,
                    4.6,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    699.0,
                    0.5,
                    "https://www.bigbasket.com/media/uploads/p/l/40127665_11-bb-royal-organic-sona-masoori-raw-rice.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/40127665-2_3-bb-royal-organic-sona-masoori-raw-rice.jpg",
                    "https://www.bigbasket.com/media/uploads/p/s/40127665-4_3-bb-royal-organic-sona-masoori-raw-rice.jpg",
                    "https://www.bigbasket.com/media/uploads/p/s/40127665-7_1-bb-royal-organic-sona-masoori-raw-rice.jpg"
            );

            Item sugar = new Item(
                    7L,
                    "Sugar",
                    20,
                    4.7,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    37.0,
                    0.35,
                    "https://www.bigbasket.com/media/uploads/p/l/30005417_8-bb-popular-sugar.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/30005417-3_7-bb-popular-sugar.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/30005417-6_10-bb-popular-sugar.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/30005417-7_1-bb-popular-sugar.jpg"
            );

            Item atta = new Item(
                    8L,
                    "Aashirvaad Atta 5 kg",
                    20,
                    4.8,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    300.0,
                    0.25,
                    "https://www.bigbasket.com/media/uploads/p/l/126906_8-aashirvaad-atta-whole-wheat.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/126906-3_8-aashirvaad-atta-whole-wheat.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/126906-5_8-aashirvaad-atta-whole-wheat.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/126906-8_2-aashirvaad-atta-whole-wheat.jpg"
            );

            Item toothpaste = new Item(
                    9L,
                    "Colgate Bamboo and Mint Charcoal Fresh Toothpaste, 240g",
                    20,
                    4.5,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    190.0,
                    0.4,
                    "https://www.bigbasket.com/media/uploads/p/s/40186854_2-colgate-charcoal-clean-black-gel-toothpaste-bamboo-charcoal-mint-saver-pack.jpg",
                    "https://www.bigbasket.com/media/uploads/p/s/40186854-2_2-colgate-charcoal-clean-black-gel-toothpaste-bamboo-charcoal-mint-saver-pack.jpg",
                    "https://www.bigbasket.com/media/uploads/p/s/40186854-4_2-colgate-charcoal-clean-black-gel-toothpaste-bamboo-charcoal-mint-saver-pack.jpg",
                    "https://www.bigbasket.com/media/uploads/p/s/40186854-5_2-colgate-charcoal-clean-black-gel-toothpaste-bamboo-charcoal-mint-saver-pack.jpg"
            );

            Item jam = new Item(
                    10L,
                    "Kissan Mixed fruit Jam, 700g",
                    20,
                    4.3,
                    LocalDate.of(2022, Month.DECEMBER, 21),
                    220.0,
                    0.45,
                    "https://www.bigbasket.com/media/uploads/p/s/40002118_13-kissan-mixed-fruit-jam.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/40002118-3_5-kissan-mixed-fruit-jam.jpg",
                    "https://www.bigbasket.com/media/uploads/p/s/40002118-4_6-kissan-mixed-fruit-jam.jpg",
                    "https://www.bigbasket.com/media/uploads/p/l/40002118-8_3-kissan-mixed-fruit-jam.jpg"
            );

            repository.saveAll
                    (List.of(lays, coke,oreo, Haldirams, SunflowerOil,rice, sugar, atta, toothpaste, jam));
        };
    }
}
