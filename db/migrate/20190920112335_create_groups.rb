class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.index :name, unique: true
      # t.Group id: nil, name: nil, created_at: nil, updated_at: nil
      t.timestamps
    end
  end
end
