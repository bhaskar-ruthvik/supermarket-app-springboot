import React from 'react'
import './cart.css'
import {FiShoppingCart} from 'react-icons/fi';
import {BsFillCreditCardFill} from 'react-icons/bs';
import {RiSecurePaymentFill} from 'react-icons/ri';
import {MdOutlineAdd} from 'react-icons/md';
import {GrFormSubtract, GrFormClose} from 'react-icons/gr';
import {Link} from 'react-router-dom';

function Cart() {
    return (
        <div>
            <main class="container__cart">

<h1 class="heading">
  <FiShoppingCart name="cart-outline"></FiShoppingCart> Shopping Cart
</h1>

<div class="item-flex">

  <section class="checkout">

    <h2 class="section-heading">Payment Details</h2>

    <div class="payment-form">

      <div class="payment-method">

        <button class="method selected">
          <BsFillCreditCardFill></BsFillCreditCardFill>

          <span>Credit Card</span>

          <ion-icon class="checkmark fill" name="checkmark-circle"></ion-icon>
        </button>

        <button class="method">
          <RiSecurePaymentFill></RiSecurePaymentFill>

          <span>UPI</span>

          <ion-icon class="checkmark" name="checkmark-circle-outline"></ion-icon>
        </button>

      </div>

      <form action="#">

        <div class="cardholder-name">
          <label for="cardholder-name" class="label-default">Cardholder name</label>
          <input type="text" name="cardholder-name" id="cardholder-name" class="input-default" />
        </div>

        <div class="card-number">
          <label for="card-number" class="label-default">Card number</label>
          <input type="number" name="card-number" id="card-number" class="input-default" />
        </div>

        <div class="input-flex">

          <div class="expire-date">
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
          </div>

        </div>

      </form>

    </div>

    <button class="btn btn-primary">
      <b>Pay</b> $ <span id="payAmount">2.15</span>
    </button>

    <Link to="/"><button class="btn btn-primary">
      <b>Cancel</b>
    </button></Link>

  </section>


  
  <section class="cart">

    <div class="cart-item-box">

      <h2 class="section-heading">Order Summary</h2>

      <div class="product-card">

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

      </div>

      <div class="product-card">

        <div class="card">

          <div class="img-box">
            <img src="./cabbage.jpg" alt="Cabbage" width="80px" class="product-img" />
          </div>

          <div class="detail">

            <h4 class="product-name">Cabbage 1 Pcs</h4>

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
              ₹ <span id="price">60</span>
              </div>

            </div>

          </div>

          <button class="product-close-btn">
            <GrFormClose></GrFormClose>
          </button>

        </div>

      </div>

    </div>

    <div class="wrapper">

      <div class="discount-token">

        <label for="discount-token" class="label-default">Gift card/Discount code</label>

        <div class="wrapper-flex">

          <input type="text" name="discount-token" id="discount-token" class="input-default" />

          <button class="btn btn-outline">Apply</button>

        </div>

      </div>

      <div class="amount">

        <div class="subtotal">
          <span>Subtotal</span> <span>₹ <span id="subtotal">205</span></span>
        </div>

        <div class="tax">
          <span>Tax</span> <span>₹ <span id="tax">010</span></span>
        </div>

        <div class="shipping">
          <span>Shipping</span> <span>₹ <span id="shipping">000</span></span>
        </div>

        <div class="total">
          <span>Total</span> <span>₹ <span id="total">215</span></span>
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
