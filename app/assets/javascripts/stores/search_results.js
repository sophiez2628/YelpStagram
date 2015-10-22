(function(root){
  var CHANGE_EVENT = "change";
  var _myDatabaseResults = [];
  var _googleResults = [];
  var resetMyDatabaseResults = function(results){
    console.log("my database");
    _myDatabaseResults = results;
    SearchResultsStore.onChange();
  };

  var resetGoogleResults = function(results) {
    console.log("google database")
    _googleResults = results.slice(0,20);
    SearchResultsStore.onChange();
  };

  root.SearchResultsStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _myDatabaseResults.concat(_googleResults);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    onChange: function() {
      this.emit(CHANGE_EVENT);
    },

    find: function(id) {
      //one return per function
      var target;
      _searchResults.forEach(function(result) {
        if (result.id === id) {
          target = result;
        }
      });
      return target;
    },
    //this ensures that the store is listening to the dispatcher
    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === SearchResultsConstants.SEARCH_RESULTS_RECEIVED){
        resetMyDatabaseResults(action.searchResults);
      } else if (action.actionType === SearchResultsConstants.GOOGLE_RESULTS_RECEIVED) {
        resetGoogleResults(action.searchResults);
      }
    })
  });

})(this);
