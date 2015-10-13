(function(root) {
  'use strict';
  var CHANGE_EVENT = "change";

  var filterParams = {
    find: null,
    near: null
  };

  var resetSearchParams = function(find, near) {
    filterParams.find = find;
    filterParams.near = near;
    SearchParamsStore.onChange();
  };

  root.SearchParamsStore = $.extend({}, EventEmitter.prototype, {
    filterParams: function() {
      return filterParams;
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
      if(action.actionType === SearchParamsConstants.UPDATE_SEARCH_PARAMS){
      resetSearchParams(action.find, action.near);
        //should be called every time the search params are reset
      }
    })

  });

}(this));
