ApiUtil = {
  fetchSearchResults: function(params){
    //make an api call using AJAX in here
    $.ajax({
      url: '/api/search_results',
      type: 'GET',
      data: params,
      dataType: 'json',
      success: function(searchResults) {
        ApiActions.receiveAll(searchResults);
      }
    });
  }
};
