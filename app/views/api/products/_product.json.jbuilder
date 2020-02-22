
json.extract! product, :id, :title, :description, :price, :user_id, :category, :quantity, :seller

if product.photo.attached?
    json.photoUrl url_for(product.photo)
end
