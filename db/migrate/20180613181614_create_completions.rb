class CreateCompletions < ActiveRecord::Migration[5.2]
  def change
    create_table :completions do |t|
      t.integer :user_id, null: false
      t.integer :lesson_id, null: false, index: true

      t.timestamps
    end

    add_index :completions, [:user_id, :lesson_id], unique: true
  end
end
