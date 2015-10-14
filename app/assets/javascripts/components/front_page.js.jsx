var FrontPage = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    //empty string if no user input
    var find = e.currentTarget.find.value;
    var near = e.currentTarget.near.value;
    ApiUtil.fetchSearchResults({find: find, near: near});
    this.props.history.pushState(null,'searchresults');
    //send this information to search param store
    //(a store has dispatcher registered that listens for actions)
    //when search param store is updated, search results should be listening
    //only when search results are ready should i redirect
  },


  render: function() {
    return (
      <div className="col-lg-6 col-lg-offset-3 text-center">
          <span>discover the best places in your area</span>
        <form onSubmit={this.handleSubmit}>
          Find: <input type="text" name="find"></input>
          Near: <input type="text" name="near"></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }

});
