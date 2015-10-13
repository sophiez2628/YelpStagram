var Navbar = React.createClass({

render: function() {
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
              <ul className="nav navbar-nav pull-right">
                
              </ul>
            </div>

        </div>
      </nav>
    </div>
  );
}

});
