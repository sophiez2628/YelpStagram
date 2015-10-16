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

  fetchPlace: function(place) {
    $.ajax({
      url: '/api/places/' + place.place_id,
      type: 'GET',
      data: place,
      dataType: 'json',
      success: function(place) {
        ApiActions.receivePlace(place);
      }
    });
  }

};
