import { RECEIVE_CART_ITEM_ERRORS, RECEIVE_CART_ITEM } from '../actions/cart_item_actions';

const productErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ITEM_ERRORS:
      return action.errors;
    case RECEIVE_CART_ITEM:
      return [];
    default:
      return state;
  }
}

export default productErrorsReducer;