import React from 'react';
import {Link} from 'react-router-dom';

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.item.id,
      quantity: this.props.item.quantity
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value }, () => this.props.updateCartItem(this.state));
    }
  }

  totalItemSum(){
    let total = (parseFloat(this.props.item.quantity) * parseFloat(this.props.item.price)).toFixed(2);
    return total;
  }

  render() {

    let {item} = this.props;

    return (
      <div className="item-container">
        <h2 className="item-seller-name">{item.seller_name}</h2>

        <div className="item-info-container">
          <div className="item-img-container">
            <Link to={`/products/${item.product_id}`}>
              <img src={this.props.item.photoUrl}/>
            </Link>
          </div>

          <div className="item-title-container">
            <div>
              <Link to={`/products/${item.product_id}`}>
                <h2>{item.title}</h2>
              </Link>
            </div>
            <button onClick={() => this.props.deleteCartItem(this.props.item.id)}>Remove</button>
          </div>

          <div className="item-quantity-container">
            <input id="quantity" type="number" onChange={this.update('quantity')} min="1" max={item.product_quantity} value={this.state.quantity}/>
          </div>

          <div className="item-cost">
            <h3>${this.totalItemSum()}</h3>
            <p>(${item.price} each)</p>
          </div>
        </div>

        <div className="item-bottom-container">
          <label> This order is a gift
            <input className="gift" type="checkbox"/>
          </label>
          <p>Price will not be shown on packing slip</p>
          <textarea id="item-note" placeholder={`Add a note to ${item.seller_name} (optional)`}></textarea>
        </div>

      </div>
    )
  }
}

export default CartIndexItem;