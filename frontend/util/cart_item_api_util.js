export const createCartItem = item => (
  $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: {item},
  })
);

export const fetchAllCartItems = userId => (
  $.ajax({
    method: 'GET',
    url: 'api/cart_items/',
    data: { user_id: userId}
  })
);

export const updateCartItem = item => (
  $.ajax({
    method: 'PATCH',
    url: `api/cart_items/${item.id}`,
    data: {item}
  })
);

export const deleteCartItem = itemId => (
  $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${itemId}`,
  })
)

