# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  rating     :integer          not null
#  body       :text             not null
#  author_id  :integer          not null
#  place_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  belongs_to :place,
             primary_key: :id,
             foreign_key: :place_id,
             class_name: "Place"

  belongs_to :user,
              primary_key: :id,
              foreign_key: :author_id,
              class_name: "User"

  def self.fetch(place_id)
    Review.where('place_id = ?', place_id)
  end
end
