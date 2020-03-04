import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../actions/cart_item_actions';

const cartItemsReducer = (state ={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({}, action.items)
    case RECEIVE_CART_ITEM:
      nextState[action.item.id] = action.item;
      return nextState;
    case REMOVE_CART_ITEM:
      delete nextState[action.itemId];
      return nextState;
    default:
      return state;
  }
}

export default cartItemsReducer;