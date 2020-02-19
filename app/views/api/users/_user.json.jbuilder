json.extract! user, :id, :email, :name, :city, :gender, :birth_month, :birth_day, :about

# if user.photo.attached?
#   json.photoUrl url_for(user.photo)
# end