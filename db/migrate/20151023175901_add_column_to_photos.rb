class AddColumnToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :google_place_id, :string
  end
end
