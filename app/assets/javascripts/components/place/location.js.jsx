var PlaceLoc = React.createClass({
  getInitialState: function() {
    return { place: {} };
  },

  componentWillReceiveProps: function(prop) {
    this.setState({ place: prop.place});
  },

  render: function() {
    return (
      <div className="place-location">
        <Map place={this.state.place} />
        <div>
          {this.state.place.address || this.state.place.formatted_address}
        </div>
      </div>
    );
  }
});
