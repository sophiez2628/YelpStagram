var FrontPage = React.createClass({
  componentDidMount: function() {
    var input = document.getElementById('two');
    this.autocomplete = new google.maps.places.Autocomplete(input);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    //empty string if no user input
    var find = e.currentTarget.find.value;
    var near = e.currentTarget.near.value;
    var place = this.autocomplete.getPlace();
    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lng();
    var query = {find: find, near: {lat: lat, lng: lng}};
    this.props.history.pushState(null,'searchResults', query);
  },


  render: function() {
    return (
      <div>
        <div id="bg-images">
          <img className="bottom" src="/assets/food.jpg" />
          <img className="top" src="/assets/amsterdam.jpg" />
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
