class Product < ApplicationRecord
    validates :title, :price, :description, :quantity, :category, :user_id, presence: true 
    # validates :price , numericality: { greater_than: 0 }
    validates :quantity, numericality: { greater_than: 0 }
    validates :category, inclusion: { in: ["jewelry&accessories", "clothing&shoes", 
            "home&living", "wedding&party", "toys&entertainment", "art&collectibles", "craftsupplies", "vintage"],
            message: "%{value} is not a valid category" }
    validate :ensure_photo

        
    
    belongs_to :seller,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
    
    has_one_attached :photo
    
        
    def ensure_photo
        unless self.photo.attached?
                errors[:photo] << "Must be attached"
        end
    end
end
