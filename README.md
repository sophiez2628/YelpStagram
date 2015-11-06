# YelpStagram

[www.yelpstagram.com][heroku]

[heroku]: http://www.yelpstagram.com


YelpStagram is a web application inspired by Yelp and Instagram built using Ruby on Rails and React.js. YelpStagram has the following main functionalities:


* create an account
* read and add reviews
* upload pictures
* search for places using keywords and location  
* can also search for places using current location (by leaving the 'near' input box empty)

YelpStagram has the following main features:
* custom-built user authentication that uses BCrypt to store the encrypted password
* search feature consumes data from Google Maps and Places APIs to find any place based on the user’s keywords and location
* Rails JSON API that retrieves a YelpStagram user’s reviews and photos
* implements the Flux pattern, which allows for maintainability and fast debugging
