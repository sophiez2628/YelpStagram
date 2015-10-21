var FrontPage = React.createClass({
  componentDidMount: function() {
    //finds user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      this.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      }.bind(this));
    }
    //adds google's autocomplete functionality
    var input = document.getElementById('two');
    this.autocomplete = new google.maps.places.Autocomplete(input);
  },

  //when user submits form
  handleSubmit: function(e) {
    e.preventDefault();
    //empty string if no user input
    var find = e.currentTarget.find.value;
    var place = this.autocomplete.getPlace();
    var lat;
    var lng;
    if (place) {
      lat = place.geometry.location.lat();
      lng = place.geometry.location.lng();
    } else {
      //user's current location
      lat = this.pos.lat;
      lng = this.pos.lng;
    }
    var query = {find: find, near: {lat: lat, lng: lng}};
    //pass the find and near info to search results page as a query
    this.props.history.pushState(null,'searchResults', query);
  },


  render: function() {
    return (
      <div>
        <div id="bg-images">
          <img className="bottom" src="images/food.jpg" />
          <img className="top" src="images/amsterdam.jpg" />
        </div>

        <div className="col-lg-6 col-lg-offset-3 text-center front-page">
            <span>discover the best places in your area</span>
          <form id="search-form" onSubmit={this.handleSubmit}>
            <input id="one" type="text" name="find" placeholder="find"></input>
            <input id="two" type="text" name="near" placeholder="near"></input>
            <input id="three" type="submit" value="search"></input>
          </form>
        </div>
      </div>
    );
  }

});
