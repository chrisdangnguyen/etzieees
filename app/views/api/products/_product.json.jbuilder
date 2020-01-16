
json.extract! product, :id, :title, :description, :price, :user_id, :category, :quantity

if product.photo.attached?
    json.photoUrl url_for(product.photo)
end
