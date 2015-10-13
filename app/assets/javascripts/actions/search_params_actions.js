SearchParamsActions = {
  updateSearchParams: function(find, near){
    AppDispatcher.dispatch({
      actionType: SearchParamsConstants.UPDATE_SEARCH_PARAMS,
      find: find,
      near: near 
    });
  }

};
