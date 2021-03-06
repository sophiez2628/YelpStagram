(function(root){

  var CHANGE_EVENT = "change";
  var _photos = [];
  var _photo = [];
  var resetPhotos = function(photos){
    _photos = photos;
    PhotosStore.onChange();
  };

  var resetPhoto = function(photo){
    _photo = [photo];
    PhotosStore.onChange();
  };

  root.PhotosStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _photos.slice(0);
    },

    one: function() {
      return _photo.concat(_photos);
    },

    findPhoto: function(place_id) {
      var returnItem;
      _photos.forEach(function(photo) {
        if (photo.place_id === place_id) {
          returnItem = photo;
        }
      });
      return returnItem;
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
      if(action.actionType === PhotosConstants.PHOTOS_RECEIVED){
        resetPhotos(action.photos);
      } else if(action.actionType === PhotosConstants.PHOTO_RECEIVED) {
        resetPhoto(action.photo);
      }
    })
  });

})(this);
