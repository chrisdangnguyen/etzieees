json.extract! cart_item, :id, :user_id, :product_id, :quantity
json.title cart_item.product.title
json.price cart_item.product.price
json.product_quantity cart_item.product.quantity
json.seller_name cart_item.product.seller.name
if (cart_item.product.photo.attached?)
  json.photoUrl url_for(cart_item.product.photo)
end