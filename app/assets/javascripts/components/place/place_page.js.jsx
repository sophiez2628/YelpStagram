var PlacePage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: {} };
  },

  componentDidMount: function() {
    PlaceStore.addChangeListener(this.onChange);
    ApiUtil.fetchPlace({place_id: this.props.params.placeId});
  },

  onChange: function() {
    this.setState({ place: PlaceStore.all() });
  },

  handleWriteReview: function(e) {
    e.preventDefault();
    var placeURL = "/writeReview/" + this.props.params.placeId;
    this.history.pushState(null, placeURL);
  },

  handleUploadPhoto: function(e) {
    cloudinary.openUploadWidget({ cloud_name: 'dqrqkkhtr', upload_preset: 'pcdi2psu'},
      function(error, result) {
        console.log(result);
       });
  },

  render: function() {
    return (
      <div className="place-page">
        <main className="place-header clearfix">
          <h1>{this.state.place.name}</h1>
          <button onClick={this.handleWriteReview}>Write a Review</button>
          <button onClick={this.handleUploadPhoto}>Add a Photo</button>
        </main>
        <div className="map-photos clearfix">
          <PlaceLoc place={this.state.place} />
          <PhotoIndex placeId={this.props.params.placeId}/>
        </div>
        <h3>reviews</h3>
        <ReviewIndex placeId={this.props.params.placeId} />
      </div>
    );
  }
});
