var FrontPage = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    //empty string if no user input
    var find = e.currentTarget.find.value;
    var near = e.currentTarget.near.value;
    var query = {find: find, near: near};
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
