class RenameCategoryidToCategoryAndDropCategories < ActiveRecord::Migration[5.2]
  def change
    drop_table :categories
    rename_column :products, :category_id, :category
  end
end
