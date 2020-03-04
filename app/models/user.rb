class User < ApplicationRecord
    validates :email, :name, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_one_attached :photo

    has_many :products,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "Product"

    has_many :cart_items,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "CartItem"

    attr_reader :password

    after_initialize :ensure_session_token, :ensure_photo

    def ensure_photo
        self.photo.attached? || self.photo.attach(io: File.open("app/assets/images/etsy_image_profile.png"), filename:"etsy_image_profile.png")
    end
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

  private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
        end
        self.session_token
    end

end
