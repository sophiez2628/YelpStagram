var Map = React.createClass({
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    SearchResultsStore.addChangeListener(this.onChange);
  },

  onChange: function() {
    var searchResults = SearchResultsStore.all();
    searchResults.forEach(function(result) {
      var marker = new google.maps.Marker({
        position: {lat: result.lat, lng: result.lng },
        title: result.name
      });
      marker.setMap(this.map);
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <div className="map" ref="map"></div>
      </div>
    );
  }

});
