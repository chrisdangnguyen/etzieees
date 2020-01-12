class Product < ApplicationRecord
    validates :product_name, :price, :detail, :quantity, :catergory_id,
        :user_id, prescence: true 
    validates :price, numericality: { greater_than: 0 }
    validates :quantity, numericality: { greater_than: 0 }

    belongs_to :user
    belongs_to :category

end
