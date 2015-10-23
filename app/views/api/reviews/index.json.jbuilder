json.array! @reviews do |review|
  json.extract! review, :id, :rating, :body, :author_id, :place_id, :google_place_id, :created_at
  json.user review.user
end
