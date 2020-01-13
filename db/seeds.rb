# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#delete all seeds first 
User.delete_all
Product.delete_all


#creating user seeds

user1 = User.create!({email: "demo@etzieees", name: "Demo", password: "demo123"})
user2 = User.create!({email: "leathergoods", name: "Pia", password: "asdfghjkl"})
user3 = User.create!({email: "76ers4lyfe", name: "James", password: "asdfghjkl"})
user4 = User.create!({email: "vintagestyle", name: "Sam", password: "asdfghjkl"})
user5 = User.create!({email: "mitchup", name: "Mitch", password: "asdfghjkl"})
user6 = User.create!({email: "4evabelieber", name: "Suzie", password: "asdfghjkl"})
user7 = User.create!({email: "queen", name: "Beyonce", password: "asdfghjkl"})
user8 = User.create!({email: "purejewelry", name: "Theo", password: "asdfghjkl"})
user9 = User.create!({email: "channelorange", name: "Urban", password: "asdfghjkl"})
user10 = User.create!({email: "fashionnova", name: "Mikejones", password: "asdfghjkl"})   

#creating product seeds
product1 = Product.create({product_name: "Emerald ring", detail: "Beautiful emerald ring in a size 10", 
    price: 250.50, user_id: user1.id, quantity: 5, category: "jewelry & accessories"})

product2 = Product.create({product_name: "Monogrammed Comfort Color T-shirt ", 
    detail: "Short sleeves shirt with custom monogrammed pocket", 
    price: 13.00, user_id: user3.id, quantity: 9, category: "clothing & shoes"})

product3 = Product.create({product_name: "Custom Settler of Catans", 
    detail: "Precision laser cut form high quality birch plywood - custom theme board", 
    price: 100.00, user_id: user2.id, quantity: 3, category: "toys & entertainment"})

product4 = Product.create({product_name: "Rustic Bottle Opener", 
    detail: "Rustic bottle opener great for woodworking project.", 
    price: 5.99, user_id: user4.id, quantity: 7, category: "vintage"})
