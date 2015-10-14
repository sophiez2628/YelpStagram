var Map = React.createClass({
  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.mymap = new google.maps.Map(map, mapOptions);
  },

  render: function() {
    return (
      <div>
        <div className="map" ref="map"></div>
      </div>
    );
  }

});
