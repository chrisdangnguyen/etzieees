@products.each do |product|
    json.set! product.id do 
        json.partial! 'product', product: product
        json.photoUrl url_for(product.photo)
    end
end

