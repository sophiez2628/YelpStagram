var PlacePage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    return window.SearchResultsStore.find(parseInt(this.props.params.placeId));
  },

  handleWriteReview: function(e) {
    e.preventDefault();
    var placeURL = "/writeReview/" + this.props.params.placeId;
    this.history.pushState(null, placeURL);
  },

  handleUploadPhoto: function(e) {
    cloudinary.openUploadWidget({ cloud_name: 'dqrqkkhtr', upload_preset: 'pcdi2psu'},
      function(error, result) {
        result.forEach(function(image) {
          ApiUtil.saveImage({url: image.url,
                            user_id: window.CURRENT_USER_ID,
                            place_id: this.props.params.placeId});
        });
       });
  },

  render: function() {
    return (
      <div>
        <h1>{this.state.place.name}</h1>
        <button onClick={this.handleWriteReview}>Write a Review</button>
        <button onClick={this.handleUploadPhoto}>Add a Photo</button>
        <h3>Reviews</h3>
        <ReviewIndex placeId={this.props.params.placeId} />
        <PhotoIndex placeId={this.props.params.placeId}/>
      </div>
    );
  }
});
