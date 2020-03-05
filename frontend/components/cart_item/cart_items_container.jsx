import { connect } from 'react-redux';
import CartItems from './cart_items';
import { updateCartItem, deleteCartItem, fetchAllCartItems } from '../../actions/cart_item_actions';


const mapSTP = (state) => {
  const allItems = state.entities.cartItems;

  return ({
    allCartItems: Object.keys(allItems).map(id => allItems[id] )
  })
}

const mapDTP = dispatch => ({
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
})

export default connect(mapSTP, mapDTP)(CartItems);