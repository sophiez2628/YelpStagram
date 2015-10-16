# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  place_id   :integer          not null
#  user_id    :integer          not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ActiveRecord::Base
  def self.find(place_id)
    Photo.where('place_id = ?', place_id)
  end

  def self.find_one(place_id)
    photo = Photo.where('place_id = ?', place_id).first
    return photo
  end

end
