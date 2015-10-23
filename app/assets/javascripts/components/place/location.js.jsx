var PlaceLoc = React.createClass({
  render: function() {
    return (
      <div className="place-location">
        <Map place={this.props.place} />
        <div>
          {this.props.place.formatted_address}
        </div>
      </div>
    );
  }
});
