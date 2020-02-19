class AddUserInfoToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender, :string
    add_column :users, :city, :string
    add_column :users, :birth_month, :integer
    add_column :users, :birth_day, :integer
    add_column :users, :about, :text
  end
end
