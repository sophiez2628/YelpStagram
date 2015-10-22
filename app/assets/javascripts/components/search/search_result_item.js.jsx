var SearchResultItem = React.createClass({
  getInitialState: function() {
    return { place: { } };
  },
  mixins: [ReactRouter.History],


  showPlacePage: function() {
    var placeURL;
    if (this.props.searchResult.place_id) {
      placeURL = "/searchResults/" + this.state.place.place_id;
    } else {
      placeURL = "/searchResults/" + this.props.searchResult.id;
    }
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
    this.map = window.map;
    var request;
    if (this.props.searchResult.place_id) {
      request = {
        placeId: this.props.searchResult.place_id
      };

      var service = new google.maps.places.PlacesService(this.map);
      window.setTimeout(service.getDetails(request, function(placeDetails, status) {
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

      }.bind(this)), 10000);
    } else {
        this.addMarker(this.props.searchResult, this.props.index);
        var ave = this.calculateReviewAverage(this.props.searchResult.reviews);
        var $rate = $(React.findDOMNode(this.refs.ratingBox));
        $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
        $rate.rating('update', ave);
        console.log('componentDidMount');
    }
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

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      label: (index + 1) + "",
      title: place.name
    });
    marker.setMap(window.map);

    //recenter map to the first marker
    if (index === 0) {
      window.map.setCenter({lat: lat, lng: lng});
    }
  },

  render: function() {
    if (this.props.searchResult.place_id) {
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
    } else {
      console.log("render!");
      this.determineRatingInfo();
      return (
          <div className="one-search-result clearfix">
            <img src={this.props.searchResult.photo} className="index-img"></img>
            <div className="info">
              <h3 onClick={this.showPlacePage} className="place-name">
                {parseInt(this.props.index) + 1}. {this.props.searchResult.name}
              </h3>
              <input ref="ratingBox" name="rating" className="rating"></input>
              <span className="num-reviews">{this.num_reviews} reviews</span>
            </div>
            <p>{this.props.searchResult.address}</p>
          </div>
        );
    }

  }

});
