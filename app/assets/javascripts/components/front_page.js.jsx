var FrontPage = React.createClass({



  render: function() {
    return (
      <div>
        <form>
          <span>discover the best places in your area</span>
          Find: <input type="text" name="find"></input>
          Near: <input type="text" name="near"></input>
          <input type="button" value="Search"></input>
        </form>
      </div>
    );
  }

});
