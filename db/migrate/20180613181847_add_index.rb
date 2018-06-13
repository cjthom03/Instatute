class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :courses, :description
  end
end
