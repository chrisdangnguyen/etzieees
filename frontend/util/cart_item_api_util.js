export const addCartItem = cart_item => (
  $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: {cart_item},
  })
);

export const fetchAllCartItems = () => (
  $.ajax({
    method: 'GET',
    url: 'api/cart_items/',
    // data: { user_id: userId}
  })
);

export const updateCartItem = cart_item => (
  $.ajax({
    method: 'PATCH',
    url: `api/cart_items/${cart_item.id}`,
    data: {cart_item}
  })
);

export const deleteCartItem = cart_itemId => (
  $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${cart_itemId}`,
  })
)

