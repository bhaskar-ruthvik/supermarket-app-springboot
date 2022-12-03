package com.assignment.supermarket.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/admin")
public class ItemController {

    private final ItemService itemservice;

    @Autowired
    public ItemController(ItemService itemservice)
    {
        this.itemservice =  itemservice;
    }

    @GetMapping
    public List<Item> getItems()
    {
        return itemservice.getItems();
    }

    @PostMapping
    public void registerNewItem(@RequestBody Item item)
    {
        itemservice.addNewItem(item);
    }

    @DeleteMapping(path = "{id}")
    public void deleteItem(@PathVariable("id") Long id){
        itemservice.deleteItem(id);
    }
}
