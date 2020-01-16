json.partial! "api/products/product", product: @product
# if @product.seller.photo.attached?
#     json.photoUrl url_for(@product.seller.photo)
# end