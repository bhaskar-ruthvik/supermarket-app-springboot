package com.assignment.supermarket.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void deleteItem(Long id) {
        itemRepository.findItemByID(id);
        boolean exists = itemRepository.existsById(id);
            if(!exists)
            {
                throw new IllegalStateException(
                        "item with id" + id + "does not exist"
                );
            }
        itemRepository.deleteById(id);
    }
}
