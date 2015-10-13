var Navbar = React.createClass({
navContent: function () {
  if (window.CURRENT_USER_ID) {
    return (
      <ul className="nav navbar-nav pull-right">
        <li onClick={this.signOut}><a>sign out</a></li>
      </ul>
    );
  } else {
    return (
      <ul className="nav navbar-nav pull-right">
        <li><a href="/session/new">sign in</a></li>
        <li><a href="/users/new">sign up</a></li>
      </ul>
    );
  }
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

            <p className="navbar-text">YelpStagram</p>


            <button type="button" className="navbar-toggle collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapse-menu"
                                  aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
         </div>

            <div className="collapse navbar-collapse" id="collapse-menu">
              { list }
            </div>

        </div>
      </nav>
  );
}

});
