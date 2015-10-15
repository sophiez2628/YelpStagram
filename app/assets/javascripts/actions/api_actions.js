ApiActions = {
  receiveAll: function(searchResults){
    AppDispatcher.dispatch({
      actionType: SearchResultsConstants.SEARCH_RESULTS_RECEIVED,
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

  receivePlace: function(place){
    AppDispatcher.dispatch({
      actionType: PlaceConstants.PLACE_RECEIVED,
      place: place
    });
  }
};
