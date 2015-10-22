var SearchResultItem = React.createClass({
  getInitialState: function() {
    return { place: { } };
  },
  mixins: [ReactRouter.History],


  showPlacePage: function() {
    var placeURL = "/searchResults/" + this.state.place.place_id;
    this.history.pushState(null, placeURL);
  },

  determineRatingInfo: function() {
    this.num_reviews = this.props.searchResult.reviews.length;
  },

  calculateReviewAverage: function(reviews) {
    var sum = 0.0;
    reviews.forEach(function(review) {
      sum += parseFloat(review.rating);
    });
    var ave = parseFloat(sum)/reviews.length;
    return ave;
  },

  componentDidMount: function() {
    //markers being set to window.map
    this.map = window.map;
    var request = { placeId: this.props.searchResult.place_id };
    var service = new google.maps.places.PlacesService(this.map);
    service.getDetails(request, function(placeDetails, status) {
      if (placeDetails !== null) {
        var $rate = $(React.findDOMNode(this.refs.ratingBox));
        $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
        if (placeDetails.rating) {
          $rate.rating('update', placeDetails.rating);
        } else if (!placeDetails.rating && placeDetails.reviews ) {
          var ave = this.calculateReviewAverage(placeDetails.reviews);
          $rate.rating('update', ave);
        } else {
          $rate.rating('update', 0);
        }

        if (!placeDetails.user_ratings_total) {
          placeDetails.user_ratings_total = 0;
        }

        if (placeDetails.photos) {
          placeDetails.profilePicUrl = placeDetails.photos[0].getUrl({'maxWidth': 200, 'maxHeight': 200});
        } else {
          placeDetails.profilePicUrl = "http://www.arinow.org/wp-content/uploads/2015/03/placeholder.jpg";
        }

        this.addMarker(placeDetails, this.props.index);
        this.setState({place: placeDetails});
      }

      }.bind(this));

  },

  addMarker: function(place, index) {
    //currently only from the google api
    var lat;
    var lng;
    if (place.place_id) {
      lat = place.geometry.location.lat();
      lng = place.geometry.location.lng();
    } else {
      lat = place.lat;
      lng = place.lng;
    }
    index = index + 1;
    this.marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      icon: 'http://maps.google.com/mapfiles/kml/paddle/' + index + '.png',
      title: place.name
    });
    this.marker.setMap(this.map);
    //recenter map to the first marker
    if (index === 0) {
      this.map.setCenter({lat: lat, lng: lng});
    }
  },

  componentWillUnmount: function () {
    this.marker.setMap(null);
    this.marker = null;
  },

  render: function() {
      return (
        <div className="one-search-result clearfix">
          <img src={this.state.place.profilePicUrl} className="index-img"></img>
          <div className="info">
            <h3 onClick={this.showPlacePage} className="place-name">
              {parseInt(this.props.index) + 1}. {this.state.place.name}
            </h3>
            <input ref="ratingBox" name="rating" className="rating"></input>
            <span className="num-reviews">{this.state.place.user_ratings_total} reviews</span>
          </div>
          <p id="address">{this.state.place.formatted_address}</p>
        </div>
      );
    }
});
