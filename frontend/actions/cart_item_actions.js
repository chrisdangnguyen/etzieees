import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS';

const receiveAllCartItems = items => ({
  type: RECEIVE_ALL_CART_ITEMS,
  items
});

const receiveCartItem = item => ({
  type: RECEIVE_CART_ITEM,
  item
});

const removeCartItem = itemId => ({
  type: REMOVE_CART_ITEM,
  itemId
});

const receiveCartItemErrors = errors => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  errors
});

export const createCartItem = item => dispatch => (
  CartItemAPIUtil.createCartItem(item)
    .then(item => dispatch(receiveCartItem(item)),
    errors =>(dispatch(receiveCartItemErrors(errors.responseJSON)))
  ) 
);

export const fetchAllCartItems = userId => dispatch => (
  CartItemAPIUtil.fetchAllCartItems(userId)
    .then(items => dispatch(receiveAllCartItems(items)),
    errors => (dispatch(receiveCartItemErrors(errors.responseJSON)))
  )
);

export const updateCartItem = item => dispatch (
  CartItemAPIUtil.updateCartItem(item)
    .then(item => dispatch(receiveCartItem(item)),
    errors => (dispatch(receiveCartItemErrors(errors.responseJSON)))
    )
);

export const deleteCartItem = itemId => dispatch => (
  CartItemAPIUtil.deleteCartItem(itemId)
    .then(() => dispatch(removeCartItem(itemId)),
    errors => (dispatch(receiveCartItemErrors(errors.responseJSON)))
    )
);

