json.array! @reviews do |review|
  json.extract! review, :id, :rating, :body, :author_id, :place_id
  json.user review.user
end
