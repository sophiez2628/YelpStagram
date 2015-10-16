var Map = React.createClass({

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
    }
  },

  componentWillReceiveProps: function(prop) {
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
      <div>
        <div className={name} ref="map"></div>
      </div>
    );
  }

});
