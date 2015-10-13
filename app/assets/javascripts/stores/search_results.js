(function(root){
  //when the contents of the BenchStore change, need to inform all
  //interested parties by emitting a CHANGE_EVENT
  var CHANGE_EVENT = "change";
  var _searchResults = [];
  var resetSearchResults = function(searchResults){
    _searchResults = searchResults;
    SearchResultsStore.onChange();
  };

  root.SearchResultsStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      //return a shallow copy so consumer cannot mutate original
      return _searchResults.slice(0);
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
    //this ensures that the store is listening to the dispatcher
    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === SearchResultsConstants.SEARCH_RESULTS_RECEIVED){
        resetSearchResults(action.searchResults);
      }
    })
  });

})(this);
