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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
