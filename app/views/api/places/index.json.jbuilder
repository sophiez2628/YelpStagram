json.array! @places do |place|
  json.extract! place, :id, :name, :address, :web_url, :lat, :lng, :price
  unless place.photos.empty?
    json.photo place.photos.first.url
  end
end
