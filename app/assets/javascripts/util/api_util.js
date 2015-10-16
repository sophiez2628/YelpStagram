ApiUtil = {
  fetchSearchResults: function(params){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/places',
      type: 'GET',
      data: params,
      dataType: 'json',
      success: function(searchResults) {
        ApiActions.receiveAll(searchResults);
      }
    });
  },

  createReview: function(params){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/reviews',
      type: 'POST',
      data: params,
      dataType: 'json',
      success: function(review) {
        //go to review site
        var placeURL = "/searchResults/" + review.author_id;
      }
    });
  },

  fetchReviews: function(place_id){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/reviews',
      type: 'GET',
      data: place_id,
      dataType: 'json',
      success: function(reviews) {
        ApiActions.receiveReviews(reviews);
      }
    });
  },

  fetchPhotos: function(place_id){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/photos',
      type: 'GET',
      data: place_id,
      dataType: 'json',
      success: function(photos) {
        ApiActions.receivePhotos(photos);
      }
    });
  },

  fetchPhoto: function(place){
    //make an api call using AJAX in here
    //what is place?
    //place is the object that is passed in
    //in this case, place is {place_id: 1}

    //params will have "place_id" => "1"
    $.ajax({
      url: '/api/places/photo',
      type: 'GET',
      data: place,
      dataType: 'json',
      success: function(photo) {
        ApiActions.receivePhoto(photo);
      }
    });
  },

  fetchPlace: function(place_id) {
    $.ajax({
      url: '/api/search_results/' + place_id.place_id,
      type: 'GET',
      data: place_id,
      dataType: 'json',
      success: function(place) {
        ApiActions.receivePlace(place);
      }
    });
  }

};
