ApiActions = {
  receiveAll: function(searchResults){
    AppDispatcher.dispatch({
      actionType: SearchResultsConstants.SEARCH_RESULTS_RECEIVED,
      searchResults: searchResults
    });
  }
};
