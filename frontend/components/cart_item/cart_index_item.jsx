import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const CartIndexItem = props => {

  const [itemState, setItemState] = useState({id: props.item.id, quantity: props.item.quantity})
  const {item} = props;

  useEffect(() => {
    props.updateCartItem(itemState)
  }, [itemState])

  function update (e) {
    setItemState({...itemState, quantity: e.target.value})
  }

  function totalItemSum(){
    let total = (parseFloat(props.item.quantity) * parseFloat(props.item.price)).toFixed(2);
    return total;
  }

  return (
    <div className="item-container">
      <div className="seller-info-container">
        <Link className="seller-info" to={`/users/${item.seller_id}`}>
          <img src={item.seller_photoUrl} className="seller-photo"/>
          <h2 className="item-seller-name">{item.seller_name}</h2>
        </Link>
      </div>

      <div className="item-info-container">
        <div className="item-img-container">
          <Link to={`/products/${item.product_id}`}>
            <img className="item-photo" src={item.photoUrl}/>
          </Link>
        </div>

        <div className="item-title-container">
            <Link id="item-title-link" to={`/products/${item.product_id}`}>
              <h2 className="item-title">{item.title}</h2>
            </Link>
          <button onClick={() => props.deleteCartItem(item.id)}>Remove</button>
        </div>

        <div className="item-quantity-container">
          <input id="quantity" type="number" onChange={update} min="1" max={item.product_quantity} value={itemState.quantity}/>
        </div>

        <div className="item-cost">
          <h3>${totalItemSum()}</h3>
          <p>(${parseFloat(item.price).toFixed(2)} each)</p>
        </div>
      </div>

      <div className="item-bottom-container">
        <label> 
          <input className="gift" type="checkbox"/>
          This order is a gift
        </label>
        <p>Price will not be shown on packing slip</p>
        <textarea id="item-note" placeholder={`Add a note to ${item.seller_name} (optional)`}></textarea>
      </div>
    </div>
  )
}

export default CartIndexItem;