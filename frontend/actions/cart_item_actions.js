import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const RECEIVE_ALL_CART_ITEMS = 'RECEIVE_ALL_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS';

const receiveAllCartItems = cartItems => ({
  type: RECEIVE_ALL_CART_ITEMS,
  cartItems
});

const receiveCartItem = cartItem => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

const removeCartItem = cartItemId => ({
  type: REMOVE_CART_ITEM,
  cartItemId
});

const receiveCartItemErrors = errors => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  errors
});

export const addCartItem = cartItem => dispatch => {
  console.log(cartItem)
  return(
    CartItemAPIUtil.addCartItem(cartItem)
    .then(cartItem => {
      console.log(cartItem)
      dispatch(receiveCartItem(cartItem))
      console.log(cartItem)
    }
      ,
    errors =>(dispatch(receiveCartItemErrors(errors.responseJSON)))
  ) 
)};

export const fetchAllCartItems = () => dispatch => (
  CartItemAPIUtil.fetchAllCartItems()
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)),
    errors => (dispatch(receiveCartItemErrors(errors.responseJSON)))
  )
);

export const updateCartItem = cartItem => dispatch => (
  CartItemAPIUtil.updateCartItem(cartItem)
    .then(cartItem => dispatch(receiveCartItem(cartItem)),
    errors => (dispatch(receiveCartItemErrors(errors.responseJSON)))
    )
);

export const deleteCartItem = cartItemId => dispatch => (
  CartItemAPIUtil.deleteCartItem(cartItemId)
    .then(() => dispatch(removeCartItem(cartItemId)),
    errors => (dispatch(receiveCartItemErrors(errors.responseJSON)))
    )
);

