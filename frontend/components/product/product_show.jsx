import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NumericInput from "react-numeric-input";

const ProductShow = props => {
  const [productState, setProductState] = useState({product_id: props.match.params.productId, quantity: 1})
  const { product, userId } = props;

  useEffect(() => {
    props.fetchProduct(props.match.params.productId)
  }, [])

  function handleAddToCart(e) {
    e.preventDefault();
    if (!props.userId) {
      props.openModal('login')
    } else {
      props.addCartItem(productState)
        .then(() => (props.history.push(`/cart`)))
    }
  }

  function handleChange(e) {
    setProductState({...productState, quantity: e})
  }

  if (!props.product) {
      return null
  }

  const cartButton = userId === product.user_id
    ? ''
    : < button className="product-to-cart" onClick={handleAddToCart}>Add to cart</button>;

  return (
    <div className="show-container">
      <div className="show-column">
        <div className="show-col-left">
          <img src={product.photoUrl} className="show-photo" />
          <div className="show-item-review">
            {/* <p>Reviews</p> */}
          </div>
        </div>

        <div className="show-col-right">
          <div className="product-info">
            <Link
              to={`/users/${product.user_id}`}
              className="show-user-name"
            >
              {product.seller.name}
            </Link>
            <h2 className="show-title">{product.title}</h2>
            <h3 className="show-price">${parseFloat(product.price).toFixed(2)}</h3>

          <div className="show-quantity">Quantity
              <div className="quantity-container">
                  <NumericInput
                      required
                      value={productState.quantity}
                      id="quantity"
                      min={1}
                      max={product.quantity}
                      onChange={handleChange}
                  />
              </div>
          </div>
              <div className="cart-button-container">
                {cartButton}
              </div>
          </div>

          <div className="product-description">
            <div className="show-description">{product.description}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductShow);