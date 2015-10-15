qq# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

marlowe_photo_one = Photo.create({
  place_id: 1,
  user_id: 1,
  url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1444865982/rupj3x1a85z5pefnodut.png"
  })

marlowe = Place.create({
  name: "Marlowe",
  address: "500 Brannan St San Francisco, CA 94107",
  web_url: "marlowesf.com",
  lat: 37.7782810,
  lng: -122.3968960,
  price: 2
  })

street_taco = Place.create({
  name: "Street Taco",
  address: "1607 Haight St San Francisco, CA 94117",
  web_url: "streettacosf.com",
  lat: 37.7697480,
  lng: -122.4489120,
  price: 1
  })

taco_shop = Place.create({
  name: "The Taco Shop At Underdog's",
  address: "1824 Irving St San Francisco, CA 94122",
  web_url: "tacoshopsf.com",
  lat: 37.7637930,
  lng: -122.4776910,
  price: 1
  })
