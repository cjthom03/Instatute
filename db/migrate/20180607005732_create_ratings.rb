class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :rating, null:false
      t.integer :course_id, null:false, index: true

      t.timestamps
    end
  end
end
