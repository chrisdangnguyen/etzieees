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

user1 = User.create({email: "demo@etzieees.com", name: "Demo", password: "demo123", 
    city: 'San Francisco', gender: 'male', birth_month: "November", birth_day: "23", 
    about: 'Hi, I enjoy making custom vintage items and selling them!' })
file70 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/palmtrees.jpg")
user1.photo.attach(io: file70, filename: "palmtrees.jpg")
user1.save!

user2 = User.create({email: "leathergoods", name: "Pia", password: "asdfghjkl",
    city: 'Austin', gender: 'male', birth_month: "November", birth_day: "5", 
    about: 'Hi, I enjoy making custom vintage items and selling them!' })
file71 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/waterfall.jpeg")
    user2.photo.attach(io: file71, filename: "waterfall.jpeg")
    user2.save!

user3 = User.create({email: "76ers4lyfe", name: "James", password: "asdfghjkl"})
file72 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/zion.jpg")
    user3.photo.attach(io: file72, filename: "zion.jpg")
    user3.save!

user4 = User.create({email: "vintagestyle", name: "Sam", password: "asdfghjkl"})
file73 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/yosemite.jpg")
    user4.photo.attach(io: file73, filename: "yosemite.jpg")
    user4.save!

user5 = User.create({email: "mitchup", name: "Mitch", password: "asdfghjkl"})
file81 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/goldengate.jpg")
    user5.photo.attach(io: file81, filename: "goldengate.jpg")
    user5.save!

user6 = User.create({email: "4evabelieber", name: "Suzie", password: "asdfghjkl"})

user7 = User.create({email: "queen", name: "Beyonce", password: "asdfghjkl"})

user8 = User.create({email: "purejewelry", name: "Theo", password: "asdfghjkl"})

user9 = User.create({email: "channelorange", name: "Urban", password: "asdfghjkl"})
file74 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ripkb.png")
    user9.photo.attach(io: file74, filename: "ripkb.png")
    user9.save!

user10 = User.create({email: "fashionnova", name: "Mikejones", password: "asdfghjkl"})
file75 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/rainy.jpg")
    user10.photo.attach(io: file75, filename: "rainy.jpg")
    user10.save!

user11 = User.create({email: "allthejewelries", name: "jewelryforall", password: "asdfghjkl",
    city: 'San Francisco', gender: 'female', birth_month: "January", birth_day: "18", 
    about: 'Hello, I have been making jewelry for years and love to see my beautiful creation on people! 
    Please check my unique items and let me know if there are any questions.' })  
file76 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/rain.jpg")
    user11.photo.attach(io: file76, filename: "rain.jpg")
    user11.save!

user12 = User.create({email: "uniquenessclothes", name: "uniquenessFashion", password: "asdfghjkl",
    city: 'Portland', gender: 'male', birth_month: "July", birth_day: "14", 
    about: "I am based in Portland and been making awesome clothings for all! Using the utmost quality material for clothing. 
    Sure to last lifetime!" })  
file77 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/sanddunes.jpg")
    user12.photo.attach(io: file77, filename: "sanddunes.jpg")
    user12.save!

user13 = User.create({email: "tisthewedding", name: "seasonofhappyness", password: "asdfghjkl",
    city: 'New York', gender: 'female', birth_month: "May", birth_day: "24", 
    about: 'All your custom wedding needs I am here for. Please do not hesistate to message me for any specific wedding needs.' })
file78 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/beach.jpeg")
    user13.photo.attach(io: file78, filename: "beach.jpeg")
    user13.save!

user14 = User.create({email: "creativeneeds", name: "creativearts", password: "asdfghjkl",
    city: 'Seattle', gender: 'male', birth_month: "April", birth_day: "22", 
    about: 'I like art. Do you like art? Come shop and look at my creativeness on canvas.' })
file79 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/starrynight.jpg")
    user14.photo.attach(io: file79, filename: "starrynight.jpg")
    user14.save!

user15 = User.create({email: "susancrafting", name: "craftingworld", password: "asdfghjkl",
    city: 'San Diego', gender: 'female', birth_month: "June", birth_day: "02", 
    about: 'I got all the craft supplies needed to make awesome and unique creations!' })
file80 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/machu.jpg")
    user15.photo.attach(io: file80, filename: "machu.jpg")
    user15.save!  

# file70 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/palmtrees.jpg")
#     user1.photo.attach(io: file70, filename: "palmtrees.jpg")
#     user1.save!
# file71 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/waterfall.jpg")
#     user2.photo.attach(io: file71, filename: "waterfall.jpg")
#     user2.save!
# file72 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/zion.jpg")
#     user3.photo.attach(io: file72, filename: "zion.jpg")
#     user3.save!
# file73 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ripkb.png")
#     user4.photo.attach(io: file73, filename: "ripkb.png")
#     user4.save!
# file74 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/yosemite.jpg")
#     user9.photo.attach(io: file74, filename: "yosemite.jpg")
#     user9.save!
# file75 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/rainy.jpg")
#     user10.photo.attach(io: file75, filename: "rainy.jpg")
#     user10.save!
# file76 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/rain.jpg")
#     user11.photo.attach(io: file76, filename: "rain.jpg")
#     user11.save!
# file77 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/sanddunes.jpg")
#     user12.photo.attach(io: file77, filename: "sanddunes.jpg")
#     user12.save!
# file78 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/beach.jpg")
#     user13.photo.attach(io: file78, filename: "beach.jpg")
#     user13.save!
# file79 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/starrynight.jpg")
#     user14.photo.attach(io: file79, filename: "starrynight.jpg")
#     user14.save!
# file80 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/machu.jpg")
#     user15.photo.attach(io: file80, filename: "machu.jpg")
#     user15.save!
# file81 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/goldengate.jpg")
#     user5.photo.attach(io: file81, filename: "goldengate.jpg")
#     user5.save!



#creating product seeds
product1 = Product.new({category: "jewelry&accessories", 
    title: "Emerald ring", description: "Beautiful emerald ring in a size 10", 
    price: 250.50, user_id: user2.id, quantity: 5 })
    file1 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/emerald_ring.jpg")
    product1.photo.attach(io: file1, filename: "emerald_ring.jpg")
    product1.save!
    

product2 = Product.new({title: "Monogrammed Comfort Color T-shirt ", 
    description: "Short sleeves shirt with custom monogrammed pocket", 
    price: 13.00, user_id: user3.id, quantity: 9, category: "clothing&shoes"})
    file2 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/monogrammed_shirt.jpg")
    product2.photo.attach(io: file2, filename: "monogrammed_shirt.jpg")
    product2.save!
    

product3 = Product.new({title: "Custom Settler of Catans", 
    description: "Precision laser cut form high quality birch plywood - custom theme board", 
    price: 100.00, user_id: user2.id, quantity: 3, category: "toys&entertainment"})
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
    price: 150.00, user_id: user3.id, quantity: 9, category: "clothing&shoes"})
    file5 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/backpack.jpg")
    product5.photo.attach(io: file5, filename: "backpack.jpg")
    product5.save!

product6 = Product.new({title: "Leather Bifold Waller", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 125.00, user_id: user3.id, quantity: 9, category: "clothing&shoes"})
    file6 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/wallet.jpg")
    product6.photo.attach(io: file6, filename: "wallet.jpg")
    product6.save!

product7 = Product.new({title: "Custom 100% Beaver Felt Hat", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 750.00, user_id: user1.id, quantity: 3, category: "clothing&shoes"})
    file7 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/hat.jpg")
    product7.photo.attach(io: file7, filename: "hat.jpg")
    product7.save!

product8 = Product.new({title: "Turquoise Native American Ring", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 78.00, user_id: user1.id, quantity: 2, category: "jewelry&accessories"})
    file8 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ring.jpg")
    product8.photo.attach(io: file8, filename: "ring.jpg")
    product8.save!

product9 = Product.new({title: "Navajo Sterling Silver Ring", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 115.00, user_id: user5.id, quantity: 3, category: "jewelry&accessories"})
    file9 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ring2.jpg")
    product9.photo.attach(io: file9, filename: "ring2.jpg")
    product9.save!

product10 = Product.new({title: "Tree Painting", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 40.00, user_id: user7.id, quantity: 9, category: "art&collectibles"})
    file10 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/painting.jpg")
    product10.photo.attach(io: file10, filename: "painting.jpg")
    product10.save!

product11 = Product.new({title: "Custom Painting with Quotes", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 25.00, user_id: user3.id, quantity: 5, category: "art&collectibles"})
    file11 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/customframe.jpg")
    product11.photo.attach(io: file11, filename: "customframe.jpg")
    product11.save!

product12 = Product.new({title: "Felt Balls", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 5.99, user_id: user5.id, quantity: 7, category: "craftsupplies"})
    file12 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/feltballs.jpg")
    product12.photo.attach(io: file12, filename: "feltballs.jpg")
    product12.save!

product13 = Product.new({title: "Weaving Kit", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 29.99, user_id: user5.id, quantity: 3, category: "craftsupplies"})
    file13 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/weaving+kit.jpg")
    product13.photo.attach(io: file13, filename: "weaving+kit.jpg")
    product13.save!

product14 = Product.new({title: "Wall Art ", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 50.00, user_id: user1.id, quantity: 9, category: "home&living"})
    file14 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/wallart.jpg")
    product14.photo.attach(io: file14, filename: "wallart.jpg")
    product14.save!

product15 = Product.new({title: "Custom Mugs", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 9.99, user_id: user6.id, quantity: 7, category: "home&living"})
    file15 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/mugs.jpg")
    product15.photo.attach(io: file15, filename: "mugs.jpg")
    product15.save!

product16 = Product.new({title: "Handmade Tapestry", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 19.90, user_id: user2.id, quantity: 9, category: "home&living"})
    file16 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/tapestry.jpg")
    product16.photo.attach(io: file16, filename: "tapestry.jpg")
    product16.save!

product17 = Product.new({title: "Wall Shelf", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 35.00, user_id: user4.id, quantity: 5, category: "home&living"})
    file17 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/shelf.jpg")
    product17.photo.attach(io: file17, filename: "shelf.jpg")
    product17.save!

product18 = Product.new({title: "Bridesmaid Robes Satin", 
    description: "A competitors operating at world-class companies have recognized that company 
    have a shared destiny without the compete in the high levels of people have changed, 
    the demand flexibility, innovation, and management - are practices are practiced by 
    world-class competence and quality, teamwork, companies:.", 
    price: 16.50, user_id: user6.id, quantity: 9, category: "wedding&party"})
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

# ---------------
# jewelry

product21 = Product.new({title: "Family Necklace - Personalized Gift - Linked Circle Necklace", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 31.50, user_id: user11.id, quantity: 12, category: "jewelry&accessories"})
    file21 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/circlenecklace.jpg")
    product21.photo.attach(io: file21, filename: "circlenecklace.jpg")
    product21.save!

product22 = Product.new({title: "Boho Bracelet, Turquoise Bracelet, Native American Bracelet, Southwestern Jewelry,", 
    description: "Boho Bracelet, Turquoise Bracelet, Native American Bracelet, Southwestern Jewelry, Agate Bracelet, Stone Bracelet, Women Bracelet", 
    price: 33.99, user_id: user11.id, quantity: 10, category: "jewelry&accessories"})
    file22 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/beadedbracelet.jpg")
    product22.photo.attach(io: file22, filename: "beadedbracelet.jpg")
    product22.save!

product23 = Product.new({title: "Jewelry Friendship Bracelet", 
    description: "Personalized Bracelet Jewelry Friendship Bracelet for Women Wedding Party Gift Mantra Bracelet Engraved Bracelets Bangle", 
    price: 20.99, user_id: user11.id, quantity: 50, category: "jewelry&accessories"})
    file23 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/friendbracelet.jpg")
    product23.photo.attach(io: file23, filename: "friendbracelet.jpg")
    product23.save!

product24 = Product.new({title: "Reclaimed Whiskey Barrel Oak Forged Carbon Fiber Ring", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 60.00, user_id: user11.id, quantity: 4, category: "jewelry&accessories"})
    file24 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/oakring.jpg")
    product24.photo.attach(io: file24, filename: "oakring.jpg")
    product24.save!

product25 = Product.new({title: "Smoky Quartz Crystal Necklace", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 14.40, user_id: user11.id, quantity: 4, category: "jewelry&accessories"})
    file25 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/smokequartz.jpg")
    product25.photo.attach(io: file25, filename: "smokequartz.jpg")
    product25.save!

product26 = Product.new({title: "Stud Post Earrings Portugal Atrio Small Blue Tile", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 22.00, user_id: user11.id, quantity: 7, category: "jewelry&accessories"})
    file26 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/studtile.jpg")
    product26.photo.attach(io: file26, filename: "studtile.jpg")
    product26.save!

product27 = Product.new({title: "Certified 7.5mm/1.50 Carats Round Cut Gold Diamond Ring", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 1400.99, user_id: user11.id, quantity: 4, category: "jewelry&accessories"})
    file27 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/diamondring_1.jpg")
    product27.photo.attach(io: file27, filename: "diamondring_1.jpg")
    product27.save!

product28 = Product.new({title: "Princess Cut Diamond Engagement Ring", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 1750.00, user_id: user11.id, quantity: 4, category: "jewelry&accessories"})
    file28 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/diamond_ring2.jpg")
    product28.photo.attach(io: file28, filename: "diamond_ring2.jpg")
    product28.save!



# --------
# clothing


product30 = Product.new({title: "Mama Bear T-Shirt for Women", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 19.99, user_id: user12.id, quantity: 4, category: "clothing&shoes"})
    file30 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/mamabear.jpg")
    product30.photo.attach(io: file30, filename: "mamabear.jpg")
    product30.save!

    product31 = Product.new({title: "Mimosa dress / Wrap linen dress / Maternity linen dress", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 89.99, user_id: user12.id, quantity: 4, category: "clothing&shoes"})
    file31 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/mimosadress.jpg")
    product31.photo.attach(io: file31, filename: "mimosadress.jpg")
    product31.save!

    product32 = Product.new({title: "Leather Wallet - Zipper Wallet", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 64.50, user_id: user2.id, quantity: 4, category: "clothing&shoes"})
    file32 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/leatherwallet.jpg")
    product32.photo.attach(io: file32, filename: "leatherwallet.jpg")
    product32.save!

    product33 = Product.new({title: 'You Are My Sunshine Shirt', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 19.99, user_id: user12.id, quantity: 4, category: "clothing&shoes"})
    file33 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/sunshine.jpg")
    product33.photo.attach(io: file33, filename: "sunshine.jpg")
    product33.save!

    product34 = Product.new({title: 'Linen Hoodie', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 39.99, user_id: user12.id, quantity: 6, category: "clothing&shoes"})
    file34 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/linenhoodie.jpg")
    product34.photo.attach(io: file34, filename: "linenhoodie.jpg")
    product34.save!

    product35 = Product.new({title: 'Yellow Pepita oxford shoes', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 150.00, user_id: user12.id, quantity: 9, category: "clothing&shoes"})
    file35 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/oxfordshoes.jpg")
    product35.photo.attach(io: file35, filename: "oxfordshoes.jpg")
    product35.save!

    product36 = Product.new({title: 'Cowhide leather passport holder', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 48.50, user_id: user12.id, quantity: 4, category: "clothing&shoes"})
    file36 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/passport.jpg")
    product36.photo.attach(io: file36, filename: "passport.jpg")
    product36.save!

    # -----
    # Home

    product37 = Product.new({title: 'Personalized Cutting Board', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 49.99, user_id: user5.id, quantity: 9, category: 'home&living'})
    file37 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/cuttingboard.jpg")
    product37.photo.attach(io: file37, filename: "cuttingboard.jpg")
    product37.save!

    product38 = Product.new({title: 'Coat Rack - Hooks - Wall Mount', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 190.00, user_id: user5.id, quantity: 9, category: 'home&living'})
    file38 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/coatrack.jpg")
    product38.photo.attach(io: file38, filename: "coatrack.jpg")
    product38.save!

    product39 = Product.new({title: 'Whisky Decanter', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 49.99, user_id: user5.id, quantity: 9, category: 'home&living'})
    file39 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/decanter.jpg")
    product39.photo.attach(io: file39, filename: "decanter.jpg")
    product39.save!

    product40 = Product.new({title: 'Mudcloth Pillow Cover', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 29.99, user_id: user5.id, quantity: 9, category: 'home&living'})
    file40 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/pillow.jpg")
    product40.photo.attach(io: file40, filename: "pillow.jpg")
    product40.save!

    product41 = Product.new({title: 'Personalized Cheese Board', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 49.00, user_id: user5.id, quantity: 9, category: 'home&living'})
    file41 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/cheeseboard.jpg")
    product41.photo.attach(io: file41, filename: "cheeseboard.jpg")
    product41.save!

    product42 = Product.new({title: 'Urban-Industrial Executive Desk', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 925.99, user_id: user5.id, quantity: 9, category: 'home&living'})
    file42 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/urbandesk.jpg")
    product42.photo.attach(io: file42, filename: "urbandesk.jpg")
    product42.save!

    product43 = Product.new({title: 'Pawnee Travel Poster', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 19.99, user_id: user5.id, quantity: 9, category: 'home&living'})
    file43 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/pawnee.jpg")
    product43.photo.attach(io: file43, filename: "pawnee.jpg")
    product43.save!

    # ---
    # Wedding 

    product44 = Product.new({title: 'Navy Blue Wedding Invitation', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 3.60, user_id: user13.id, quantity: 9, category: 'wedding&party'})
    file44 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/invitation.jpg")
    product44.photo.attach(io: file44, filename: "invitation.jpg")
    product44.save!

    product45 = Product.new({title: 'Custom Cake Topper', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 19.50, user_id: user13.id, quantity: 9, category: 'wedding&party'})
    file45 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/caketopper.jpg")
    product45.photo.attach(io: file45, filename: "caketopper.jpg")
    product45.save!

    product45 = Product.new({title: 'Gold Bridal Necklace', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 58.99, user_id: user13.id, quantity: 9, category: 'wedding&party'})
    file45 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/bridalnecklase.jpg")
    product45.photo.attach(io: file45, filename: "bridalnecklase.jpg")
    product45.save!

    product46 = Product.new({title: 'Groomsmen Gift, Engraved Knife,', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 16.99, user_id: user13.id, quantity: 9, category: 'wedding&party'})
    file46 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/groomsmenknife.jpg")
    product46.photo.attach(io: file46, filename: "groomsmenknife.jpg")
    product46.save!

    product47 = Product.new({title: 'Groomsmen Gift, Engraved Flask,', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 11.99, user_id: user13.id, quantity: 9, category: 'wedding&party'})
    file47 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/flask.jpg")
    product47.photo.attach(io: file47, filename: "flask.jpg")
    product47.save!

    product48 = Product.new({title: 'Custom Wedding Sign', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 23.85, user_id: user13.id, quantity: 9, category: 'wedding&party'})
    file48 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/weddingsign.jpg")
    product48.photo.attach(io: file48, filename: "weddingsign.jpg")
    product48.save!

    # ---
    # toys

    product49 = Product.new({title: 'Kids name puzzle Wooden puzzle', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 8.60, user_id: user4.id, quantity: 9, category: 'toys&entertainment'})
    file49 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/busyboard.jpg")
    product49.photo.attach(io: file49, filename: "busyboard.jpg")
    product49.save!

    product50 = Product.new({title: 'Personalized Mini Wireless Bluetooth Speaker', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 19.85, user_id: user4.id, quantity: 9, category: 'toys&entertainment'})
    file50 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/speakers.jpg")
    product50.photo.attach(io: file50, filename: "speakers.jpg")
    product50.save!

    product51 = Product.new({title: 'Mercerized Cotton Crochet Yarn ', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 3.50, user_id: user4.id, quantity: 5, category: 'toys&entertainment'})
    file51 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/crochet.jpg")
    product51.photo.attach(io: file51, filename: "crochet.jpg")
    product51.save!

    product52 = Product.new({title: 'Falling Leaves Polyhedral Dice Set', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 13.00, user_id: user4.id, quantity: 9, category: 'toys&entertainment'})
    file52 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/dice.jpg")
    product52.photo.attach(io: file52, filename: "dice.jpg")
    product52.save!

    produc53 = Product.new({title: 'Montessori Baby Toys', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 29.85, user_id: user4.id, quantity: 9, category: 'toys&entertainment'})
    fil53 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/babytoys.jpg")
    produc53.photo.attach(io: fil53, filename: "babytoys.jpg")
    produc53.save!

    product54 = Product.new({title: 'Whale Plush Toy', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 21.53, user_id: user4.id, quantity: 4, category: 'toys&entertainment'})
    file54 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/whale.jpg")
    product54.photo.attach(io: file54, filename: "whale.jpg")
    product54.save!

    product55 = Product.new({title: 'Montessori Wood Pencil Holder', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 24.85, user_id: user4.id, quantity: 9, category: 'toys&entertainment'})
    file55 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/pencil.jpg")
    product55.photo.attach(io: file55, filename: "pencil.jpg")
    product55.save!


# ---
# art


    product56 = Product.new({title: 'Moss Wall | Green Wall Art', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 240.85, user_id: user14.id, quantity: 3, category: 'art&collectibles'})
    file56 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/mosswall.jpg")
    product56.photo.attach(io: file56, filename: "mosswall.jpg")
    product56.save!

    product57 = Product.new({title: 'Lemon Wall Print', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 3.85, user_id: user14.id, quantity: 9, category: 'art&collectibles'})
    file57 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/lemon.jpg")
    product57.photo.attach(io: file57, filename: "lemon.jpg")
    product57.save!

    product58 = Product.new({title: 'Modern Abstract Wall Art Decor', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 67.85, user_id: user14.id, quantity: 9, category: 'art&collectibles'})
    file58 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/modernabstract.jpg")
    product58.photo.attach(io: file58, filename: "modernabstract.jpg")
    product58.save!

    product59 = Product.new({title: 'Santa Cruz Photograph', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 24.85, user_id: user14.id, quantity: 9, category: 'art&collectibles'})
    file59 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/santacruz.jpg")
    product59.photo.attach(io: file59, filename: "santacruz.jpg")
    product59.save!

    product60 = Product.new({title: 'Ocean Print/ Beach Print/ Coastal Print', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 4.67, user_id: user14.id, quantity: 9, category: 'art&collectibles'})
    file60 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/ocean.jpg")
    product60.photo.attach(io: file60, filename: "ocean.jpg")
    product60.save!

    product61 = Product.new({title: 'Set of 3 Forest Print, Set of 3 Landscape Art', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 17.25, user_id: user14.id, quantity: 9, category: 'art&collectibles'})
    file61 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/forest.jpg")
    product61.photo.attach(io: file61, filename: "forest.jpg")
    product61.save!

    product62 = Product.new({title: 'Kobe Bryant #24 Graffiti Lakers Collage "Dream"', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 124.81, user_id: user9.id, quantity: 9, category: 'art&collectibles'})
    file62 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/kobegraffit.jpg")
    product62.photo.attach(io: file62, filename: "kobegraffit.jpg")
    product62.save!

    product63 = Product.new({title: 'Kobe Bryant Wall Canvas', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 24.08, user_id: user9.id, quantity: 9, category: 'art&collectibles'})
    file63 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/KB.jpg")
    product63.photo.attach(io: file63, filename: "KB.jpg")
    product63.save!

    product64 = Product.new({title: 'Kobe Bryant & Gianna Angel Memorial Canvas', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 24.02, user_id: user9.id, quantity: 9, category: 'art&collectibles'})
    file64 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/kbgigi.jpg")
    product64.photo.attach(io: file64, filename: "kbgigi.jpg")
    product64.save!

    # ---
    # crafts
    
    product65 = Product.new({title: 'Folded Book Art Pattern - Infinity Sign Pattern and Instructions', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 5.60, user_id: user15.id, quantity: 9, category: 'craftsupplies'})
    file65 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/foldedbook.jpg")
    product65.photo.attach(io: file65, filename: "foldedbook.jpg")
    product65.save!

    product65 = Product.new({title: 'Wool Felt Sheets', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 15.60, user_id: user15.id, quantity: 9, category: 'craftsupplies'})
    file65 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/woolfeltsheet.jpg")
    product65.photo.attach(io: file65, filename: "woolfeltsheet.jpg")
    product65.save!

    product65 = Product.new({title: 'Crochet Pattern Pavo the Peacock Rug', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 10.49, user_id: user15.id, quantity: 9, category: 'craftsupplies'})
    file65 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/crochet.jpg")
    product65.photo.attach(io: file65, filename: "crochet.jpg")
    product65.save!

    product65 = Product.new({title: 'Gold Filled Round Soft Wire', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 12.50, user_id: user15.id, quantity: 9, category: 'craftsupplies'})
    file65 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/wires.jpg")
    product65.photo.attach(io: file65, filename: "wires.jpg")
    product65.save!

    # ---
    # vintage

    product66 = Product.new({title: '100 Small Vintage Metal Buttons', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 5.99, user_id: user4.id, quantity: 9, category: 'vintage'})
    file66 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/buttons.jpg")
    product66.photo.attach(io: file66, filename: "buttons.jpg")
    product66.save!

    product67 = Product.new({title: 'Vintage Cameras', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 125.00, user_id: user4.id, quantity: 9, category: 'vintage'})
    file67 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/cameravintage.jpg")
    product67.photo.attach(io: file67, filename: "cameravintage.jpg")
    product67.save!

    product68 = Product.new({title: 'Vintage Oushak Rug', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 467.50, user_id: user4.id, quantity: 9, category: 'vintage'})
    file68 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/rug.jpg")
    product68.photo.attach(io: file68, filename: "rug.jpg")
    product68.save!

    product69 = Product.new({title: 'Natural Olive Wood Chess Table', 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec tincidunt bibendum sem nec fermentum. Pellentesque tellus erat, eleifend non eros 
    et, feugiat eleifend sapien. Etiam a eros non libero varius dignissim. Etiam mattis 
    tellus suscipit, viverra augue ut, imperdiet neque. Ut ac accumsan sapien, ac egestas 
    lectus. Maecenas cursus risus eu enim tempor, non placerat sapien gravida. Maecenas quis 
    euismod est. Mauris volutpat scelerisque orci, ut venenatis ante egestas eu.", 
    price: 76.85, user_id: user1.id, quantity: 12, category: 'toys&entertainment'})
    file69 = open("https://etzieees-seeds.s3-us-west-1.amazonaws.com/chess.jpg")
    product69.photo.attach(io: file69, filename: "chess.jpg")
    product69.save!




 
  