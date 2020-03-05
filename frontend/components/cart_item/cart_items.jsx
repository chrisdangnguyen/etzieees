import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NumericInput from 'react-numeric-input';
import CartIndexItem from './cart_index_item';

class CartItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true 
    }
  }

  componentDidMount() {
    this.props.fetchAllCartItems().then(() => this.setState({loading: false}))
  }


  totalItemsSum() {
    let total = 0;
    this.props.allCartItems.forEach(item => {
      total += (item.quantity * item.price)
    })
    return total.toFixed(2);
  }


  render() {
    const {allCartItems} = this.props;

    if (this.state.loading){
      return null;
    }

    let allItems = this.props.allCartItems.map(item => {
      return (
        <CartIndexItem 
          key={item.id}
          item={item}
          deleteCartItem={this.props.deleteCartItem}
          updateCartItem={this.props.updateCartItem}
        />
      )
    })




    return (
      <div className="cart-div">what is happening yall
        <h2 className="total-items">{allCartItems.length} item in your cart</h2>

        <div className="cart-container">
          <div className="left-cart-container">
            {allItems}
          </div>

          <div className="right-cart-container">

          </div>
        </div>

      </div>
    )
  }

}

export default withRouter(CartItems);