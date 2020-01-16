class Product < ApplicationRecord
    validates :title, :price, :description, :quantity, :category, :user_id, presence: true 
    validates :price, numericality: { greater_than: 0 }
    validates :quantity, numericality: { greater_than: 0 }
    validates :category, inclusion: { in: ["jewelry & accessories", "clothings & shoes", 
            "home & living", "toys & entertainment", "art & collectibles", "craft supplies", "vintage"],
            message: "%{value} is not a valid category" }
        

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "User"

    has_one_attached :photo

end
