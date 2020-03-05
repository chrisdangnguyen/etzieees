// import { connect } from 'react-redux';
// import { createCartItem, updateCartItem, fetchAllCartItems } from '../../actions/cart_item_actions';
// import NewCartItem from './new_cart_item';

// const mapSTP = (state, ownProps) => {
//   const cartItem = null;
//   if (state.session.id) {
//     Object.keys(state.entities.cartItems).forEach(id => {
//       if (state.entities.cartItems[id].product_id === ownProps.product_id) {
//         cartItem = state.entities.cartItems[id];
//       }
//     })
//   }
//   if (cartItem === null) {
//     null;
//   } else {
//     cartItem;
//   }

//   return ({
//     product_id: ownProps.product_id,
//     user_id: ownProps.user_id,
//     cartItem: cartItem,
//     errors: state.errors.items
//   })
// }

// const mapDTP = dispatch => ({
//   createCartItem: item => dispatch(createCartItem(item)),
//   updateCartItem: item => dispatch(updateCartItem(item)), 
//   fetchAllCartItems: userId => dispatch(fetchAllCartItems(userId))
// })

// export default connect(mapSTP, mapDTP)(NewCartItem)