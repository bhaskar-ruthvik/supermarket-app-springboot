package com.assignment.supermarket.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository)
    {
        this.itemRepository = itemRepository;
    }
    public List<Item> getItems()
    {
        return itemRepository.findAll();

    }

    public void addNewItem(Item item) {
        Optional<Item> ItemByID = itemRepository.findItemByID(item.getItem_code());
        if(ItemByID.isPresent())
        {
            throw new IllegalStateException("Email already taken");
        }
        itemRepository.save(item);
    }

    public Item getItem(Long id){
        Optional<Item> ItemByID = itemRepository.findItemByID(id);
        if(ItemByID.isPresent()){
            return ItemByID.get();
        }
        return null;
    }
    @Transactional
    public Integer updateItem(String idi, String name,String deliveryD,String quantitys,String prices,String offers,String ratings){
        Long id = Long.parseLong(idi);





        if(itemRepository.findById(id).isPresent()){
            Item item = itemRepository.findById(id).get();

            if(name!=null&& name.length()!=0){
                item.setItem_name(name);
            }
            if(deliveryD!=null){
                LocalDate date = LocalDate.parse(deliveryD);
                item.setDeliveryDate(date);
            }
            if(quantitys!=null){
                Integer quantity = Integer.parseInt(quantitys);
                item.setQuantity(quantity);
            }
            if(prices!=null){
                Double price = Double.parseDouble(prices);
                item.setPrice(price);
            }
            if(offers!=null){
                Double offer = Double.parseDouble(offers);
                item.setOffer(offer);
            }
            if(ratings!=null){
                Double rating = Double.parseDouble(ratings);
                item.setRating(rating);
            }

            return 1;
        }
        return 0;
    }

    public Integer deleteItem(Long id) {
        itemRepository.findItemByID(id);
        boolean exists = itemRepository.existsById(id);
            if(!exists)
            {
                return 0;
            }
        itemRepository.deleteById(id);
            return 1;
    }
}
