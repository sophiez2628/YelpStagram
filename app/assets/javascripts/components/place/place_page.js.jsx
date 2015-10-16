var PlacePage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: {}, reviews: [] };
  },

  componentDidMount: function() {
    PlaceStore.addChangeListener(this.onPlaceChange);
    ReviewsStore.addChangeListener(this.onReviewsChange);

    ApiUtil.fetchPlace({place_id: this.props.params.placeId});
    ApiUtil.fetchReviews({place_id: this.props.params.placeId});
  },

  onPlaceChange: function() {
    this.setState({ place: PlaceStore.all() });
  },

  onReviewsChange: function() {
    this.setState({ reviews: ReviewsStore.all() });
    //compute average
    var sum = 0.0;
    this.state.reviews.forEach(function(review) {
      sum += parseFloat(review.rating);
    });
    var ave = parseFloat(sum)/this.state.reviews.length;

    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
    $rate.rating('update', ave);
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
          <div className="rating-info">
            <input ref="ratingBox" name="rating" className="rating"></input>
            <span className="num-reviews">{this.state.reviews.length} reviews</span>
          </div>
          <button onClick={this.handleWriteReview}>Write a Review</button>
          <button onClick={this.handleUploadPhoto}>Add a Photo</button>
        </main>
        <div className="map-photos clearfix">
          <PlaceLoc place={this.state.place} />
          <PhotoIndex placeId={this.props.params.placeId}/>
        </div>
        <h3>reviews</h3>
        <ReviewIndex reviews={this.state.reviews} />
      </div>
    );
  }
});
