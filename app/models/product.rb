class Product < ApplicationRecord
    validates :product_name, :price, :detail, :quantity, :catergory,
        :user_id, prescence: true 
    validates :price, numericality: { greater_than: 0 }
    validates :quantity, numericality: { greater_than: 0 }
    validates :category, inclusion: { in: %w(jewelry & accessories, clothings & shoes, 
        home & living, toys & entertainment, art & collectibles, craft supplies, vintage),
        message: "Please enter a valid category"}

    belongs_to :user

    has_many_attached :images

end
