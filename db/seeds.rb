# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
placeholder_image = Photo.create({
  place_id: 0,
  user_id: 0,
  url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1445034614/qlibj0px4nvpv1ktnbr3.png"
  })

# marlowe_photo_one = Photo.create({
#   place_id: 1,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1444865982/rupj3x1a85z5pefnodut.png"
#   })
#
# marlowe_photo_two = Photo.create({
#   place_id: 1,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1444869672/naxlbtvonjjx9s2nue8p.png"
#   })
#
# marlowe_photo_three = Photo.create({
#   place_id: 1,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1444869792/dqamfqlaw35eqvupivhc.png"
#   })
#
# marlowe_photo_four = Photo.create({
#   place_id: 1,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1444869872/f5vrhmqoui4egcisrx1o.png"
#   })
#
# marlowe = Place.create({
#   name: "Marlowe",
#   address: "500 Brannan St San Francisco, CA 94107",
#   web_url: "marlowesf.com",
#   lat: 37.778281,
#   lng: -122.396896,
#   price: 2
#   })
#
# marlowe_review_one = Review.create({
#   rating: 5,
#   author_id: 1,
#   place_id: 1,
#   body: "Ate here for the first time with a friend and LOVED IT! Excellent service, great location, and overall good dining experience. Definitely coming back here again.
#
#         FAVORITES:
#         -Warm Caesar toast was SO delicious & tasty! My favorite & bursting with flavors.
#         -Baked oysters = creamy
#         -Warm deviled egg melts in your mouth
#         -Grilled asparagus w/an egg = YUM!
#         -Marlowe Burger = juicy, perfectly cooked, fresh bun, tasty fries!
#
#         SO SO:
#         -Brussel sprouts chips were just OK & too dry. I've had better."
#   })
#
# marlowe_review_two = Review.create({
#   rating: 5,
#   author_id: 1,
#   place_id: 1,
#   body: "Loved this place! I came for brunch on a Saturday after finding out about this restaurant in a list of brunch places recommended by Eater sf.
#          I was pleasantly surprised that they take reservations for brunch! I called on Friday evening and was able to make a reservation for 4 people at noon on Saturday the next day.
#          I definitely recommend making reservations to avoid waiting for a table.
#          This is not your typical brunch place, so don't expect things like eggs benedict and omelettes. It's a little bit more of an elevated menu."
#   })

sophie = User.create({
  password_digest: "$2a$10$P7QbxpQ/FFW2MPWMvjiyP.0dl6lV.Akh8wGHJiojnIbREs07jDcL.",
  session_token: "xe1xV1XiO5TmNp2DTPQiEg",
  email: "sophie.zhao@ucla.edu",
  first_name: "Sophie",
  last_name: "Zhao"
  })

# park_tavern = Place.create({
#   name: "Park Tavern",
#   address: "1652 Stockton St San Francisco, CA 94133",
#   web_url: "parktavernsf.com",
#   lat: 37.8010910,
#   lng: -122.4090870,
#   price: 3
#   })
#
# park_tavern_review_one = Review.create({
#   rating: 5,
#   author_id: 1,
#   place_id: 2,
#   body: "I like the style of this restaurant.  It's big, spacious, and the decor
#   is very classy but also has a casual vibe.  The open-airness of the restaurant
#   is nice too when the weather is warm out.  The bar is very inviting as well.
#   I highly recommend Park Tavern if you want to have a big dinner party, yet
#   it's also a very good place to have a date night.  I have yet to visit Marlowe,
#   but if Park Tavern and The Cavalier are the descendants of it, then I have a lot to look forward to."
#   })
#
# park_tavern_photo_one = Photo.create({
#   place_id: 2,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1445018850/vnbmsabtpkxwrxgr4xg9.png"
#   })
#
# park_tavern_photo_two = Photo.create({
#   place_id: 2,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1445018860/wwoxuveysvqxrvqmaeje.png"
#   })
#
# park_tavern_photo_three = Photo.create({
#   place_id: 2,
#   user_id: 1,
#   url: "http://res.cloudinary.com/dqrqkkhtr/image/upload/v1445018866/zggbznahuwa1enliw5fw.png"
#   })
#
# street_taco = Place.create({
#   name: "Street Taco",
#   address: "1607 Haight St San Francisco, CA 94117",
#   web_url: "streettacosf.com",
#   lat: 37.7697480,
#   lng: -122.4489120,
#   price: 1
#   })
#
# taco_shop = Place.create({
#   name: "The Taco Shop At Underdog's",
#   address: "1824 Irving St San Francisco, CA 94122",
#   web_url: "tacoshopsf.com",
#   lat: 37.7637930,
#   lng: -122.4776910,
#   price: 1
#   })

#keep the white background
#make the cursors change
#make the map change!
