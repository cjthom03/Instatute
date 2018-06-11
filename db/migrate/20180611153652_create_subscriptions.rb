class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id
      t.integer :course_id, index: true

      t.timestamps
    end
    add_index :subscriptions, [:user_id, :course_id], unique: true
  end
end
