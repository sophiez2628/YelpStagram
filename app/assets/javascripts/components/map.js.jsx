var Map = React.createClass({

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions;
    if (this.props.place) {
      //map should only have a prop in the individual page
    } else {
      //need to readjust mapOptions so that the focus is on the search result
      mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      // SearchResultsStore.addChangeListener(this.onSearchResultsChange);
      this.map = new google.maps.Map(map, mapOptions);
      window.map = new google.maps.Map(map, mapOptions);
      //grabbing user input from the query string
      var find = this.props.location.query.find;
      var near = {lat: parseFloat(this.props.location.query.near.lat),
                  lng: parseFloat(this.props.location.query.near.lng)};
      //the request to be sent to google api
      //radius is in meters
      var request = {
        location: near,
        radius: 500,
        keyword: find
      };
      var service = new google.maps.places.PlacesService(this.map);
      service.radarSearch(request, function(places) {
        //response from google api
        ApiActions.receiveGooglePlaces(places);
      }.bind(this));
    }
  },

  componentWillReceiveProps: function(prop) {
    //for each individual page
    var map = React.findDOMNode(this.refs.map);
    var lat = prop.place.geometry.location.lat();
    var lng = prop.place.geometry.location.lng();
    // var lat = prop.place.lat;
    // var lng = prop.place.lng;
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

  // onSearchResultsChange: function() {
  //   // var searchResults = SearchResultsStore.all();
  //   // searchResults.forEach(function(result, index) {
  //   //   var marker = new google.maps.Marker({
  //   //     position: {lat: result.lat, lng: result.lng },
  //   //     label: (index + 1) + "",
  //   //     title: result.name
  //   //   });
  //   //   marker.setMap(this.map);
  //   // }.bind(this));
  // },

  render: function() {
    var name;
    if (this.props.place) {
      name = "one-place";
    } else {
      name = "multiple-place";
    }

    return (
      <div className={name}>
        <div className={name} ref="map" id="map"></div>
      </div>
    );
  }

});
