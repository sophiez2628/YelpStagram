(function(root){

  var CHANGE_EVENT = "change";
  var _reviews = [];
  var resetReviews = function(reviews){
    _reviews = reviews;
    ReviewsStore.onChange();
  };

  root.ReviewsStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      //return a shallow copy so consumer cannot mutate original
      return _reviews.slice(0);
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
      if(action.actionType === ReviewsConstants.REVIEWS_RECEIVED){
        resetReviews(action.reviews);
      }
    })
  });

})(this);
