class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.text :detail, null: false
      t.integer :price, null: false 
      t.integer :user_id, null: false
      t.integer :category_id, null: false
      t.integer :quantity, null: false 

      t.timestamps
    end
    
    add_index :products, :product_name
    add_index :products, :category_id
    add_index :products, :user_id
  end
end
