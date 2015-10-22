(function(root){

  var CHANGE_EVENT = "change";
  var _query = {};
  var resetQuery = function(query){
    _query = query;
    QueryStore.onChange();
  };

  root.QueryStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _query;
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

    dispatcherID: AppDispatcher.register(function(action){
      if(action.actionType === QueryConstants.QUERY_RECEIVED){
        resetQuery(action.query);
      }
    })
  });

})(this);
