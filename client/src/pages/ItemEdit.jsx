import React,{useState,useEffect} from 'react'
import Header from 'components/Header'
import ProductEdit from './ProductEdit'
import { useParams } from 'react-router-dom'
import { locations as cardLocations } from 'data/mock-data';

const ItemEdit = () => {
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
    <div><Header></Header><ProductEdit id={bd.item_code} name={bd.item_name} quantity={bd.quantity} rating={bd.rating} price={bd.price} offp = {bd.offer_price} img1={bd.url1} img2={bd.url2} img3={bd.url3} img4={bd.url4} off={bd.offer} delivery={bd.deliveryDate} ></ProductEdit></div>
  )
}
export default ItemEdit;
