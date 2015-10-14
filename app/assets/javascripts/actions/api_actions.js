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
  }
};
