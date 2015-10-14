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

};
