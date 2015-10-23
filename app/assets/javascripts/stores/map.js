(function(root){

  var CHANGE_EVENT = "change";
  var _mapMounted;
  var _placeMousedOver;
  var resetMapMounted = function(boolean){
    _mapMounted = boolean;
    MapStore.onChange();
  };

  var placeMousedOver = function(place) {
    _placeMousedOver = place;
    MapStore.onChange();
  };

  root.MapStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _mapMounted;
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
      if(action.actionType === MapConstants.MAP_MOUNTED){
        resetMapMounted(action.boolean);
      } else if (action.actionType === MapConstants.MOUSE_OVER_RECEIVED) {
        placeMousedOver(action.place);
      }
    })
  });

})(this);
