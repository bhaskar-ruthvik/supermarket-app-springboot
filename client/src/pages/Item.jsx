import React,{useState,useEffect} from 'react'
import Header from 'components/Header'
import Product from './Product'
import { useParams } from 'react-router-dom'
import { locations as cardLocations } from 'data/mock-data';

const Item = () => {
    const [cards] = useState(cardLocations);
    const {id} = useParams();
    console.log(id)
const [bd,setBd]= useState({})
const url = "http://localhost:8080/api/v1/item/"+id
useEffect(()=>{

	fetch(url)
	.then(res=>{return res.json()})
	.then(data =>{
		console.log(data)
		setBd(data)
	})
},[])
  return (
    <div><Header></Header><Product name={bd.item_name} quantity={bd.quantity} rating={bd.rating} price={bd.price} offp = {bd.offer_price} img1={bd.url1} img2={bd.url2} img3={bd.url3} img4={bd.url4} off={bd.offer*100} delivery={bd.deliveryDate} ></Product></div>
  )
}
export default Item;
