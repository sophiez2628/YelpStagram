# YelpStagram

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

YelpStagram is a web application inspired by Yelp and Instagram built using Ruby on Rails
and React.js. YelpStagram allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] User can create, read, edit, and delete reviews
- [ ] User can upload pictures, share, and bookmark places
- [ ] User can mark reviews as useful, funny, or cool
- [ ] User can search for places and see the location on Google Maps on the search result page
- [ ] User can filter restaurants through price
- [ ] User can also search for places using keywords  

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Review Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. I will also begin setting up a full JSON API for Reviews.

[Details][phase-one]

### Phase 2: Flux Architecture and Review CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Review store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Review `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Reviews can be created, read, edited and destroyed in the browser. Basic styling will be applied. Each place has a page that contains the place's information(IndividualInfoComponent), photos(PhotosComponent), location on a google map(MapComponent), and reviews(ReviewIndex/ReviewIndex Item component).

[Details][phase-two]

### Phase 3: SearchResult, Tags, Price Filter (2 days)

Phase 3 is focused on allowing users to search based on tags or specific place names. (Tags belong to a Place.) Users can also add new tags to each place. The search results are rendered in a component called SearchResultIndex, which contain SearchIndexItem. The search page also contains a google map that indicates the location of all the search results.

[Details][phase-three]

### Phase 4: Add Styling to the Search Page and Individual Page (1 day)


[Details][phase-four]

### Phase 5: Add Photo and Browse Photo of a Place (1 day)

Phase 5 introduces two new features. First, users can upload photos via their computers. Users can also browse through pictures in a carousel like manner.

[Details][phase-five]

### Phase 6: Explore places through pictures (1 day)

Connect with Instagram API. Filter the photos so that the ones related to places and user's current location show up when the user clicks the "explore" button. Page has a google map that shows locations of the images.

### Bonus Features (TBD)
- [ ] Allow business owners to create a new page.
- [ ] Allow user to sign into app using their Facebook Account.
- [ ] Allow user to link their YelpStagram account with Instagram account to allow them to easily upload pictures.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
