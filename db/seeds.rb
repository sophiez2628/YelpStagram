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


sophie = User.create({
  password_digest: "$2a$10$P7QbxpQ/FFW2MPWMvjiyP.0dl6lV.Akh8wGHJiojnIbREs07jDcL.",
  session_token: "xe1xV1XiO5TmNp2DTPQiEg",
  email: "sophie.zhao@ucla.edu",
  first_name: "Sophie",
  last_name: "Zhao"
  })

demo = User.create({
  password_digest: "$2a$10$motDkakQIsf7DDtWXK0rY.PHtByNgZR8elQjvxKFqLVR1yGD9Mx3G",
  session_token: "rQlphv9B07rFJqEgHLHGoQ",
  email: "demo_user@gmail.com",
  first_name: "Demo",
  last_name: "User"
  })
