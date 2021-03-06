(function(root){

  var CHANGE_EVENT = "change";
  var _place;
  var resetPlace = function(place){
    _place = place;
    PlaceStore.onChange();
  };

  root.PlaceStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _place;
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
      if(action.actionType === PlaceConstants.PLACE_RECEIVED){
        resetPlace(action.place);
      }
    })
  });

})(this);
