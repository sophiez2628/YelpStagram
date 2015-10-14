class Review < ActiveRecord::Base
  def self.fetch(place_id)
    Review.where('place_id = ?', place_id)
  end
end
