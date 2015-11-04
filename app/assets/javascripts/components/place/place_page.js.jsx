var PlacePage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: undefined, reviews: undefined, photos: undefined };
  },

  componentDidMount: function() {
    PlaceStore.addChangeListener(this.onPlaceChange);
    ReviewsStore.addChangeListener(this.onReviewsChange);
    PhotosStore.addChangeListener(this.onPhotosChange);

    //what happens when i go to a new route?
    //how to do this only after the map component has mounted?

     ApiUtil.fetchReviews({place_id: this.props.params.placeId, google: true});
     ApiUtil.fetchPhotos({place_id: this.props.params.placeId});

  },

  onMapChange: function() {
    this.map = window.map;

    var request = {
      placeId: this.props.params.placeId
    };

    var service = new google.maps.places.PlacesService(this.map);
    service.getDetails(request, function(placeDetails, status) {
      //obtain details of the place
      if (!placeDetails.photos) {
        placeDetails.profilePicUrl = "http://www.arinow.org/wp-content/uploads/2015/03/placeholder.jpg";
      }
        ApiActions.receivePlace(placeDetails);
        //goes to the place store
    });

  },

  onPhotosChange: function() {
    this.setState({ photos: PhotosStore.one() });
  },

  onPlaceChange: function() {
    this.setState({ place: PlaceStore.all() });
    if (this.state.place.place_id) {
      var $rate = $(React.findDOMNode(this.refs.ratingBox));
      $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});

      if (this.state.place.rating) {
        $rate.rating('update', this.state.place.rating);
      } else if (!this.state.place.rating && this.state.place.reviews.length !== 0) {
        var ave = this.calculateReviewAverage(this.state.place.reviews);
        $rate.rating('update', ave);
      } else {
        $rate.rating('update', 0);
      }
    }
  },

  calculateReviewAverage: function(reviews) {
    var sum = 0.0;
    reviews.forEach(function(review) {
      sum += parseFloat(review.rating);
    });
    var ave = parseFloat(sum)/reviews.length;
    return ave;
  },

  onReviewsChange: function() {
    this.setState({ reviews: ReviewsStore.all() });
    //compute average
    var ave = this.calculateReviewAverage(this.state.reviews);

    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
    $rate.rating('update', ave);
  },

  handleWriteReview: function(e) {
    e.preventDefault();
    if (window.CURRENT_USER_ID) {
      var placeURL = "/writeReview/" + this.props.params.placeId;
      this.history.pushState(null, placeURL);
    } else {
      window.location = "/session/new";
    }
  },

  handleUploadPhoto: function(e) {
    e.preventDefault();

    if (window.CURRENT_USER_ID) {
      cloudinary.openUploadWidget({ cloud_name: 'dqrqkkhtr', upload_preset: 'pcdi2psu'},
        function(error, photos) {
          photos.map(function(photo) {
            var params = {
              user_id: window.CURRENT_USER_ID,
              place_id: 0,
              google_place_id: this.props.params.placeId,
              url: photo.url
            };
            ApiUtil.createPhoto(params);
          }.bind(this));
        }.bind(this));
    } else {
       window.location = "/session/new";
    }
  },

  render: function() {
    if (this.state.place && this.state.reviews && this.state.photos) {
      var reviews = (this.state.reviews).concat(this.state.place.reviews);
      var photos = (this.state.photos).concat(this.state.place.photos);
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
            <PlaceLoc place={this.state.place} onMapMount={this.onMapChange} />
            <PhotoIndex place={this.state.place} photos={photos} profilePic={this.state.place.profilePicUrl}/>
          </div>
          <h3>reviews</h3>
          <ReviewIndex place={this.state.place} reviews={reviews} />
        </div>
      );
    } else {
        return (
          <div>
            <PlaceLoc place={this.state.place} mount={this.onMapChange} />
              <div className="rating-info">
                <input ref="ratingBox" name="rating" className="rating"></input>
              </div>
            <div className="loader">Loading...</div>
        </div>
      );
      }
    }
});
