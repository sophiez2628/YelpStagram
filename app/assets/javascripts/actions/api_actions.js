ApiActions = {


  receiveQuery: function(query){
    AppDispatcher.dispatch({
      actionType: QueryConstants.QUERY_RECEIVED,
      query: query
    });
  },

  receiveAll: function(searchResults){
    AppDispatcher.dispatch({
      actionType: SearchResultsConstants.SEARCH_RESULTS_RECEIVED,
      searchResults: searchResults
    });
  },

  receiveGooglePlaces: function(searchResults) {
    AppDispatcher.dispatch({
      actionType: SearchResultsConstants.GOOGLE_RESULTS_RECEIVED,
      searchResults: searchResults
    });
  },


  receiveReviews: function(reviews){
    AppDispatcher.dispatch({
      actionType: ReviewsConstants.REVIEWS_RECEIVED,
      reviews: reviews
    });
  },

  receivePhotos: function(photos){
    AppDispatcher.dispatch({
      actionType: PhotosConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receivePhoto: function(photo){
    AppDispatcher.dispatch({
      actionType: PhotosConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  receivePlace: function(place){
    AppDispatcher.dispatch({
      actionType: PlaceConstants.PLACE_RECEIVED,
      place: place
    });
  },

};
