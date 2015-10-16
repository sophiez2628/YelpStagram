# == Schema Information
#
# Table name: places
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  address    :string           not null
#  web_url    :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Place < ActiveRecord::Base
  has_many :reviews,
    primary_key: :id,
    foreign_key: :place_id,
    class_name: "Review"


  def self.search(find_params)
    find_params = "%#{find_params.downcase}%"

    join_params = <<-SQL
      LEFT OUTER JOIN
        reviews ON reviews.place_id = places.id
    SQL

    where_params = <<-SQL
      LOWER(places.name) LIKE :find_params OR LOWER(reviews.body) LIKE :find_params
    SQL

    Place.joins(join_params).
          where(where_params, find_params: find_params).distinct
  end





end
