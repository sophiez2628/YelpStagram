json.array! @places do |place|
  json.extract! place, :id, :name, :address, :web_url, :lat, :lng, :price
  if place.photos.empty?
    json.photo @placeholder_image_url
  else
    json.photo place.photos.first.url
  end
    json.reviews place.reviews 
end
