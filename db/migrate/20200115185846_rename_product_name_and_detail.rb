class RenameProductNameAndDetail < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :product_name, :title
    rename_column :products, :detail, :description

  end
end
