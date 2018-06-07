class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :title, null: false, index: true
      t.string :author, null: false
      t.text :description, null: false
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
