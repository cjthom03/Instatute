class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.integer :course_id, null: false
      t.string :title, null: false, index: true
      t.integer :order_num, null: false
      t.string :content_url, null: false
      t.integer :content_duration, null: false

      t.timestamps
    end

    add_index :lessons, [:course_id, :order_num], unique: true
  end
end
