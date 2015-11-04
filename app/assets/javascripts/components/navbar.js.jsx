var Navbar = React.createClass({

mixins: [ReactRouter.History],

getInitialState: function() {
  return { demo: false }
},

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
  var input = document.getElementById('auto-search');
  this.autocomplete = new google.maps.places.Autocomplete(input);
},

//when user submits form
handleSubmit: function(e) {
  e.preventDefault();
  if (this.props.params.placeId) {
    //needs to be fixed
    this.history.pushState(null, '/');
  }
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
  //fire API Action to cause Map to perform search again
  ApiActions.receiveQuery(query);
},

navContent: function () {
  if (window.CURRENT_USER_ID) {
    return (
      <ul className="nav navbar-nav pull-right">
        <li onClick={this.signOut}><a id="log-in">sign out</a></li>
      </ul>
    );
  } else {
    return (
      <ul className="nav navbar-nav pull-right">
        <li onClick={this.signDemoUserIn}><a id="log-in">demo user</a></li>
        <li><a href="/session/new" id="log-in">sign in</a></li>
        <li><a href="/users/new" id="log-in">sign up</a></li>
      </ul>
    );
  }
},

signDemoUserIn: function() {
  $.ajax({
    url: '/session',
    type: 'POST',
    dataType: 'json',
    data: {user: {email: "demo_user@gmail.com", password: "demo_user"} },
    success: function(user) {
      window.location = "/";
    }.bind(this),
    error: function (response) {
      console.log(response);
      console.log("Something went wrong.");
    }
  });
},

signOut: function() {
  $.ajax({
    url: '/session',
    type: 'DELETE',
    dataType: 'json',
    success: function(emptyObject) {
      window.location = "/";
    }
  });
},

render: function() {
  var list = this.navContent();
  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">


                <p id="logo-container"><img src="images/logo.png"></img></p>
            <form className="navbar-form navbar-left" id="navbar" role="search" onSubmit={this.handleSubmit}>


                <input type="text" className="form-control" id="bar" placeholder="find" name="find"></input>



                <input type="text" className="form-control" placeholder="near" id="auto-search"></input>


              <button type="submit" className="btn btn-default" id="search-button">
                <span className="glyphicon glyphicon-search"></span>
              </button>


            </form>


         </div>

            <div >
              { list }
            </div>

        </div>
      </nav>
  );
}

});
