import { connect } from 'react-redux';
import CartItems from './cart_items';
import { updateCartItem, deleteCartItem, fetchAllCartItems } from '../../actions/cart_item_actions';
import { openModal } from '../../actions/modal_actions';


const mapSTP = (state) => {
  const allItems = state.entities.cartItems;
  const allCartItems = Object.keys(allItems).map(id => allItems[id])
  return ({
    allCartItems: allCartItems,
    user_id: state.session.id
  })
}

const mapDTP = dispatch => ({
  fetchAllCartItems: () => dispatch(fetchAllCartItems()),
  updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
  openModal: () => dispatch(openModal('checkout'))
})

export default connect(mapSTP, mapDTP)(CartItems);