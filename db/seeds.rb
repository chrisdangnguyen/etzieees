# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'


#delete all seeds first 
User.delete_all
Product.delete_all


#creating user seeds

user1 = User.create!({email: "demo@etzieees.com", name: "Demo", password: "demo123"})
user2 = User.create!({email: "leathergoods", name: "Pia", password: "asdfghjkl"})
user3 = User.create!({email: "76ers4lyfe", name: "James", password: "asdfghjkl"})
user4 = User.create({email: "vintagestyle", name: "Sam", password: "asdfghjkl"})
user5 = User.create({email: "mitchup", name: "Mitch", password: "asdfghjkl"})
user6 = User.create({email: "4evabelieber", name: "Suzie", password: "asdfghjkl"})
user7 = User.create!({email: "queen", name: "Beyonce", password: "asdfghjkl"})
user8 = User.create!({email: "purejewelry", name: "Theo", password: "asdfghjkl"})
user9 = User.create!({email: "channelorange", name: "Urban", password: "asdfghjkl"})
user10 = User.create!({email: "fashionnova", name: "Mikejones", password: "asdfghjkl"})   

#creating product seeds
product1 = Product.new({category: "jewelry & accessories", 
    title: "Emerald ring", description: "Beautiful emerald ring in a size 10", 
    price: 250.50, user_id: user2.id, quantity: 5 })
    file1 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/emerald_ring.jpg")
    product1.photo.attach(io: file1, filename: "emerald_ring.jpg")
    product1.save!
    

product2 = Product.new({title: "Monogrammed Comfort Color T-shirt ", 
    description: "Short sleeves shirt with custom monogrammed pocket", 
    price: 13.00, user_id: user3.id, quantity: 9, category: "clothings & shoes"})
    file2 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/monogrammed_shirt.jpg")
    product2.photo.attach(io: file2, filename: "monogrammed_shirt.jpg")
    product2.save!
    

product3 = Product.new({title: "Custom Settler of Catans", 
    description: "Precision laser cut form high quality birch plywood - custom theme board", 
    price: 100.00, user_id: user2.id, quantity: 3, category: "toys & entertainment"})
    file3 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/catan.jpg")
    product3.photo.attach(io: file3, filename: "catan.jpg")
    product3.save!

product4 = Product.new({title: "Rustic Bottle Opener", 
    description: "Rustic bottle opener great for woodworking project.", 
    price: 5.99, user_id: user2.id, quantity: 7, category: "vintage"})
    file4 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/bottle_opener.jpg")
    product4.photo.attach(io: file4, filename: "bottle_opener.jpg")
    product4.save!

product5 = Product.new({title: "Leather Backpack", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 150.00, user_id: user3.id, quantity: 9, category: "clothings & shoes"})
    file5 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/backpack.jpg")
    product5.photo.attach(io: file5, filename: "backpack.jpg")
    product5.save!

product6 = Product.new({title: "Leather Bifold Waller", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 125.00, user_id: user3.id, quantity: 9, category: "clothings & shoes"})
    file6 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/wallet.jpg")
    product6.photo.attach(io: file6, filename: "wallet.jpg")
    product6.save!

product7 = Product.new({title: "Custom 100% Beaver Felt Hat", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 750.00, user_id: user4.id, quantity: 3, category: "clothings & shoes"})
    file7 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/hat.jpg")
    product7.photo.attach(io: file7, filename: "hat.jpg")
    product7.save!

product8 = Product.new({title: "Turquoise Native American Ring", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 78.00, user_id: user4.id, quantity: 2, category: "jewelry & accessories"})
    file8 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ring.jpg")
    product8.photo.attach(io: file8, filename: "ring.jpg")
    product8.save!

product9 = Product.new({title: "Navajo Sterling Silver Ring", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 115.00, user_id: user5.id, quantity: 3, category: "jewelry & accessories"})
    file9 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ring2.jpg")
    product9.photo.attach(io: file9, filename: "ring2.jpg")
    product9.save!

product10 = Product.new({title: "Tree Painting", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 40.00, user_id: user7.id, quantity: 9, category: "art & collectibles"})
    file10 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/painting.jpg")
    product10.photo.attach(io: file10, filename: "painting.jpg")
    product10.save!

product11 = Product.new({title: "Custom Painting with Quotes", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 25.00, user_id: user3.id, quantity: 5, category: "art & collectibles"})
    file11 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/customframe.jpg")
    product11.photo.attach(io: file11, filename: "customframe.jpg")
    product11.save!

product12 = Product.new({title: "Felt Balls", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 5.99, user_id: user5.id, quantity: 7, category: "craft supplies"})
    file12 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/feltballs.jpg")
    product12.photo.attach(io: file12, filename: "feltballs.jpg")
    product12.save!

product13 = Product.new({title: "Weaving Kit", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 29.99, user_id: user5.id, quantity: 3, category: "craft supplies"})
    file13 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/weaving+kit.jpg")
    product13.photo.attach(io: file13, filename: "weaving+kit.jpg")
    product13.save!

product14 = Product.new({title: "Wall Art ", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 50.00, user_id: user4.id, quantity: 9, category: "home & living"})
    file14 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/wallart.jpg")
    product14.photo.attach(io: file14, filename: "wallart.jpg")
    product14.save!

product15 = Product.new({title: "Custom Mugs", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 9.99, user_id: user6.id, quantity: 7, category: "home & living"})
    file15 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/mugs.jpg")
    product15.photo.attach(io: file15, filename: "mugs.jpg")
    product15.save!

product16 = Product.new({title: "Handmade Tapestry", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 19.90, user_id: user2.id, quantity: 9, category: "home & living"})
    file16 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/tapestry.jpg")
    product16.photo.attach(io: file16, filename: "tapestry.jpg")
    product16.save!

product17 = Product.new({title: "Wall Shelf", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 35.00, user_id: user4.id, quantity: 5, category: "home & living"})
    file17 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/shelf.jpg")
    product17.photo.attach(io: file17, filename: "shelf.jpg")
    product17.save!

product18 = Product.new({title: "Bridesmaid Robes Satin", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 16.50, user_id: user6.id, quantity: 9, category: "wedding & party"})
    file18 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/wedding.jpg")
    product18.photo.attach(io: file18, filename: "wedding.jpg")
    product18.save!

product19 = Product.new({title: "Vintage Stamps", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 5.99, user_id: user7.id, quantity: 7, category: "vintage"})
    file19 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/vintagestamps.jpg")
    product19.photo.attach(io: file19, filename: "vintagestamps.jpg")
    product19.save!

product20 = Product.new({title: "Vintage Postcards", 
    description: "These Modern Shelf Brackets for open shelves match farmhouse kitchens 
    and rustic modern decor. Heavy duty and 100% handmade in the USA! Custom sizes! 
    Brackets available in Raw Steel, Blackened Wax, and Black finishes.", 
    price: 12.99, user_id: user5.id, quantity: 4, category: "vintage"})
    file20 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/vintagepostcards.jpg")
    product20.photo.attach(io: file20, filename: "vintagepostcards.jpg")
    product20.save!

 
  