class AddColumnToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :google_place_id, :string 
  end
end
