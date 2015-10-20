var PlacePage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: {name: ""}, reviews: [] };
  },

  componentDidMount: function() {
    PlaceStore.addChangeListener(this.onPlaceChange);
    // ReviewsStore.addChangeListener(this.onReviewsChange);

    this.map = window.map;
    var request = {
      placeId: this.props.params.placeId
    };
    var service = new google.maps.places.PlacesService(this.map);
    service.getDetails(request, function(placeDetails, status) {
      //obtain details of the place
      ApiActions.receivePlace(placeDetails);
    });

    // ApiUtil.fetchPlace({place_id: this.props.params.placeId});
    // ApiUtil.fetchReviews({place_id: this.props.params.placeId});
  },

  onPlaceChange: function() {
    this.setState({ place: PlaceStore.all() });
    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
    if (this.state.place.rating) {
      $rate.rating('update', this.state.place.rating);
    } else {
      $rate.rating('update', 0);
    }


    // if (!this.state.place.user_ratings_total) {
    //   var placeDetails = this.state.place;
    //   placeDetails.user_ratings_total = 0;
    //   this.setState({place: placeDetails});
    // }
  },

  onReviewsChange: function() {
    // this.setState({ reviews: ReviewsStore.all() });
    // //compute average
    // var sum = 0.0;
    // this.state.reviews.forEach(function(review) {
    //   sum += parseFloat(review.rating);
    // });
    // var ave = parseFloat(sum)/this.state.reviews.length;
    //


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
          <div className="place-name">
            <h1>{this.state.place.name}</h1>
          </div>

          <div className="place-buttons">
            <button onClick={this.handleWriteReview}>Write a Review</button>
            <button onClick={this.handleUploadPhoto}>Add a Photo</button>
          </div>

        </main>

        <div className="rating-info">
          <input ref="ratingBox" name="rating" className="rating"></input>
          <span className="num-reviews">{this.state.place.user_ratings_total} reviews</span>
        </div>

        <div className="map-photos clearfix">
          <PlaceLoc place={this.state.place} />
          <PhotoIndex photos={this.state.place.photos}/>
        </div>
        <h3>reviews</h3>
        <ReviewIndex reviews={this.state.place.reviews} />
      </div>
    );
  }
});
