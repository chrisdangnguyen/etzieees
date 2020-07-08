import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CartIndexItem from './cart_index_item';

const CartItems = props => {
  const {allCartItems} = props;

  useEffect(() => {
    props.fetchAllCartItems()
  }, [])

  function totalItemsSum() {
    let total = 0;
    props.allCartItems.forEach(item => {
      total += (item.quantity * item.price)
    })
    return total.toFixed(2);
  }

  let allItems = props.allCartItems.map(item => {
    return (
      <CartIndexItem 
        key={item.id}
        item={item}
        deleteCartItem={props.deleteCartItem}
        updateCartItem={props.updateCartItem}
      />
    )
  })

  let title = (allCartItems.length < 2 ) ? 
    <h2 className="total-items">{allCartItems.length} item in your cart</h2> :
    <h2 className="total-items">{allCartItems.length} items in your cart</h2>

    
  if (allCartItems.length === 0) {
    return (
      <div className="cart-empty-div">
        <div className="cart-empty-container">
          <h3>Your cart is empty.</h3>
          <p>Discover something unique to fill it up</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="cart-div">
        <div className="page-title">
          {title}
        </div>

        <div className="cart-payment-container">
          <div className="left-cart-container">
            {allItems}
          </div>

          <div className="right-cart-container">
            <div className="payment-options">
              <h2>How you'll pay</h2>
              <div className="cards-icon">
                <input type="radio" name="payment" id="select-pay"/>
                <i className="fa fa-cc-mastercard"></i>
                <i className="fa fa-cc-visa"></i>
                <i className="fa fa-cc-amex"></i>
                <i className="fa fa-cc-discover"></i>
              </div>

              <div className="paypal">
                <input type="radio" name="payment" id="select-pay"/>
                <i className="fa fa-cc-paypal"></i>
              </div>

              <div className="total-amount">
                <p>Item(s) total</p>
                <h3>${totalItemsSum()}</h3>
              </div>

              <p className="ship-cost">
                Get shipping cost
              </p>

              <button className="checkout-button" onClick={() => (props.openModal())}>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CartItems);