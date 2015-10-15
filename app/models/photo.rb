class Photo < ActiveRecord::Base
  def self.find(place_id)
    Photo.where('place_id = ?', place_id)
  end

end
