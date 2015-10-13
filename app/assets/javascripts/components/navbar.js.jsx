var Navbar = React.createClass({
navContent: function () {
  if (window.CURRENT_USER_ID) {
    return (
      <ul className="nav navbar-nav pull-right">
        <li onClick={this.signOut}><a href="#">sign out</a></li>
      </ul>
    );
  } else {
    return (
      <ul className="nav navbar-nav pull-right">
        <li><a href="#">sign in</a></li>
        <li><a href="#">sign up</a></li>
      </ul>
    );
  }
},

render: function() {
  var list = this.navContent();
  return (
    <div>
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
    </div>
  );
}

});
