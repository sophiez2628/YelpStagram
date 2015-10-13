class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :web_url, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :price, null: false 
      t.timestamps null: false
    end
  end
end
