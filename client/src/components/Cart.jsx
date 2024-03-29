import React, { useEffect,useState } from 'react'
import './cart.css'
import {FiShoppingCart} from 'react-icons/fi';
import {BsFillCreditCardFill} from 'react-icons/bs';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {MdOutlineAdd} from 'react-icons/md';
import {GrFormSubtract, GrFormClose} from 'react-icons/gr';
import {Link} from 'react-router-dom';

function Cart() {
  var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); 
		var yyyy = today.getFullYear();

		today = yyyy + '-' + mm + '-' + dd;
  const [bd,setBd] = useState([])
  const [del,setDel] = useState(0)
  const [orderId,setOrderId] = useState(0)
  const [usD,setUsD] = useState({})
  useEffect(()=>{
    let url = "http://localhost:8080/api/v1/cart/get/"+window.localStorage.getItem("id")
    let url1 = "http://localhost:8080/api/v1/customer/"+window.localStorage.getItem("id")
    fetch(url)
    .then(res=>{return res.json()})
    .then(data=>{
      setBd(data)
      return fetch(url1)
      .then(res=>{return res.json()})
      .then(data=>{
        setUsD(data)
      })
    })
  
  },[])
  let total=0
  let offerTotal=0
  function handleItemDelete(e){
    let url = "http://localhost:8080/api/v1/cart/"+e.target.firstElementChild.innerText
    const requestOptions={
      method: 'DELETE'
  }
  fetch(url,requestOptions)
  .then(res=>{return res.json()})
  .then(data=>{
      setDel(data)
      if(data==1){
        window.location.reload()
      }
  })
  }
  function handleReload(){
    handleCl()
    // window.location.reload()
  }
  function handleCl(){
    let url = "http://localhost:8080/api/v1/orders/get/"+window.localStorage.getItem("id")
    fetch(url)
    .then(res=>{return res.json()})
    .then(data=>{console.log(data.length)
    setOrderId(data.length)
      window.localStorage.setItem("orderid",data.length)
  })
   for(let i=0;i<bd.length;i++){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "customer_id": window.localStorage.getItem("id"),
          "item_code": bd[i].item_code,
          "item_name": bd[i].name, 
          "order_id": orderId,
          "quantity": bd[i].quantity,
          "rating" : bd[i].rating,
          "price" : bd[i].price,
          "offer" : bd[i].offer,
          "offer_price" : bd[i].offer_price,
          "deliveryDate" : bd[i].deliveryDate,
          "url1" : bd[i].url1
          
      
         
      })
  };
    fetch("http://localhost:8080/api/v1/orders",requestOptions)
    .then(res=>{return res.json()})
    .then(data=>{console.log(data)})
  let url = "http://localhost:8080/api/v1/cart/"+bd[i].cartId
  const reqOp={
    method : 'DELETE'
  }
  fetch(url,reqOp)
  .then(res=>{return res.json()})
  .then(data=>{console.log(data)})
  
}
   }
      
  const [tot,setTot] = useState(0)
    return (
        <div>
            <main class="container__cart">

<h1 class="heading">
  <FiShoppingCart name="cart-outline"></FiShoppingCart> Shopping Cart
</h1>

<div class="item-flex">   

  <section class="checkout">

    <h2 class="section-heading">Welcome {usD.username}</h2>

    <div class="payment-form">

      <div class="payment-method">

        <button class="method selected">
          <BsFillCreditCardFill></BsFillCreditCardFill>

          <span>Account Balance : {usD.account_balance}</span>

          <ion-icon class="checkmark fill" name="checkmark-circle"></ion-icon>
        </button>

        {/* <button class="method">
          <RiSecurePaymentFill></RiSecurePaymentFill>

          <span>UPI</span>

          <ion-icon class="checkmark" name="checkmark-circle-outline"></ion-icon>
        </button> */}

      </div>

      <form action="#">

        <div class="cardholder-name">
          <label for="cardholder-name" class="label-default">Address</label>
          {/* <input type="text" name="cardholder-name" id="cardholder-name" class="input-default" /> */}
          <span>   {usD.address}</span>
        </div>

        <div class="card-number">
          <label for="card-number" class="label-default">Phone Number</label>
          {/* <input type="number" name="card-number" id="card-number" class="input-default" /> */}
          <span>   {usD.phoneNumber}</span>
        </div>
        <div class="card-number">
          <label for="card-number" class="label-default">Email</label>
          {/* <input type="number" name="card-number" id="card-number" class="input-default" /> */}
          <span>   {usD.email}</span>
        </div>

        <div class="input-flex">

          {/* <div class="expire-date">
            <label for="expire-date" class="label-default">Expiration date</label>

            <div class="input-flex">

              <input type="number" name="day" id="expire-date" placeholder="31" min="1" max="31"
                class="input-default" />
              /
              <input type="number" name="month" id="expire-date" placeholder="12" min="1" max="12"
                class="input-default" />

            </div>
          </div>

          <div class="cvv">
            <label for="cvv" class="label-default">CVV</label>
            <input type="number" name="cvv" id="cvv" class="input-default" />
          </div> */}

        </div>

      </form>

    </div>
    {del==1&& <label class="success">Deleted Item Successfully!</label>}
    {del==-1&& <label class="success">Sorry Item could not be deleted!</label>}
    
    <button class="btn btn-primary" onClick={handleReload}>
      <b>Checkout</b>{/*<span id="payAmount"></span>*/}
    </button>
    
   

    <Link to="/"><button class="btn btn-primary">
      <b>Cancel</b>
    </button></Link>
    
  </section>



  
  <section class="cart">

    <div class="cart-item-box">

      <h2 class="section-heading">Order Summary</h2>

      {/* <div class="product-card">

        <div class="card">

          <div class="img-box">
            <img src="./green-tomatoes.jpg" alt="Green tomatoes" width="80px" class="product-img" />
          </div>

          <div class="detail">

            <h4 class="product-name">Green Tomatoes 1 Kilo</h4>

            <div class="wrapper">

              <div class="product-qty">
                <button id="decrement">
                    <GrFormSubtract></GrFormSubtract>
                </button>

                <span id="quantity">1</span>

                <button id="increment">
                    <MdOutlineAdd></MdOutlineAdd>
                </button>
              </div>

              <div class="price">
              ₹ <span id="price">35</span>
              </div>

            </div>

          </div>

          <button class="product-close-btn">
            <GrFormClose></GrFormClose>
          </button>

        </div>

      </div> */}

      {bd.map((item)=>{ total= total + item.price*item.quantity
      offerTotal = offerTotal+ item.offer_price*item.quantity
  
        return <div key={item.cartId}  class="product-card">

<div class="card">

  <div class="img-box">
    <img src={item.url1} alt="Cabbage" width="80px" class="product-img" />
  </div>

  <div class="detail">

    <h4 class="product-name">{item.name}</h4>

    <div class="wrapper">

      <div class="product-qty">
        <button id="decrement">
        <GrFormSubtract></GrFormSubtract>
        </button>

        <span id="quantity">{item.quantity}</span>
        
        <button id="increment">
        <MdOutlineAdd></MdOutlineAdd>
        </button>
      </div>

      <div class="price">
      ₹ <span id="price">{item.offer_price}</span>
      </div>

    </div>

  </div>

  <button onClick={handleItemDelete} class="product-close-btn">
<p id="idp"> {item.cartId}</p>  X
    
  </button>

</div>

</div>

      })}
    </div>

    <div class="wrapper">
{/* 
      <div class="discount-token">

        <label for="discount-token" class="label-default">Gift card/Discount code</label>

        <div class="wrapper-flex">

          <input type="text" name="discount-token" id="discount-token" class="input-default" />

          <button class="btn btn-outline">Apply</button>

        </div>

      </div> */}

      <div class="amount">

        <div class="subtotal">
          <span>Subtotal</span> <span>₹ <span id="subtotal">{total}</span></span>
        </div>

        <div class="tax">
          <span>Discount</span> <span>₹ <span id="tax">{Math.round((total-offerTotal)*100)/100}</span></span>
        </div>

        {/* <div class="shipping">
          <span>Shipping</span> <span>₹ <span id="shipping">000</span></span>
        </div> */}

        <div class="total">
          <span><b>Total</b></span> <span>₹ <span id="total"><b>{Math.round(offerTotal*100)/100}</b></span></span>
        </div>

      </div>

    </div>

  </section>

</div>

</main>
        </div>
    )
}

export default Cart
