class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :place_id, null: false
      t.integer :user_id, null: false
      t.string :url, null: false
      t.timestamps null: false
    end
  end
end
