package com.assignment.supermarket.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/item")
@CrossOrigin
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
    @GetMapping(path="{itemid}")
    public Item getItem(@PathVariable("itemid")Long id)
    {
        return itemservice.getItem(id);
    }

    @PostMapping
    public void registerNewItem(@RequestBody Item item)
    {
        itemservice.addNewItem(item);
    }
    @PutMapping(path="{itemId}")
    public Integer updateItem(@PathVariable("itemId")String id, @RequestParam(required = false) String name, @RequestParam(required = false)String deliveryDate, @RequestParam(required = false)String quantity,@RequestParam(required = false)String price,@RequestParam(required = false)String offer,@RequestParam(required = false)String rating){
        return itemservice.updateItem(id,name,deliveryDate,quantity,price,offer,rating);
    }
    @DeleteMapping(path = "{id}")
    public Integer deleteItem(@PathVariable("id") Long id){
        return itemservice.deleteItem(id);
    }
}
