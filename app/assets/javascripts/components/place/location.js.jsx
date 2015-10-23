var PlaceLoc = React.createClass({
  render: function() {
    var address = this.props.place ? this.props.place.formatted_address : "";

    return (
      <div className="place-location">
        <Map place={this.props.place} mount={this.props.mount}/>
        <div>
          {address}
        </div>
      </div>
    );
  }
});
