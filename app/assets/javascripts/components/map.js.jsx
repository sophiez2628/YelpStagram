var Map = React.createClass({
  addMarker: function(result, index) {
    //currently only from the google api
    var marker = new google.maps.Marker({
      position: result.geometry.location,
      label: (index + 1) + ""
    });
    marker.setMap(this.map);
  },

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions;
    if (this.props.place) {
    } else {
      mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      SearchResultsStore.addChangeListener(this.onSearchResultsChange);
      this.map = new google.maps.Map(map, mapOptions);
      var find = this.props.location.query.find;
      var near = {lat: parseFloat(this.props.location.query.near.lat),
                  lng: parseFloat(this.props.location.query.near.lng)};
      var request = {
        location: near,
        radius: 500,
        keyword: find
      };
      var service = new google.maps.places.PlacesService(this.map);
      service.radarSearch(request, function(places) {
        for (var i = 0; i < places.length; i++ ) {
          console.log(i);
          this.addMarker(places[i], i);
        }
        ApiActions.receiveGooglePlaces(places);
      }.bind(this));
    }
  },

  componentWillReceiveProps: function(prop) {
    //for each individual page
    var map = React.findDOMNode(this.refs.map);
    var lat = prop.place.lat;
    var lng = prop.place.lng;
    var mapOptions = {
      center: {lat: lat, lng: lng},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng }
    });
    marker.setMap(this.map);
  },

  onSearchResultsChange: function() {
    var searchResults = SearchResultsStore.all();
    searchResults.forEach(function(result, index) {
      var marker = new google.maps.Marker({
        position: {lat: result.lat, lng: result.lng },
        label: (index + 1) + "",
        title: result.name
      });
      marker.setMap(this.map);
    }.bind(this));
  },

  render: function() {
    var name;
    if (this.props.place) {
      name = "one-place";
    } else {
      name = "multiple-place";
    }

    return (
      <div className="multiple-place">
        <div className={name} ref="map"></div>
      </div>
    );
  }

});
