var SearchResultItem = React.createClass({

  mixins: [ReactRouter.History],

  showPlacePage: function() {
    var placeURL = "/searchResults/" + this.props.searchResult.id;
    this.history.pushState(null, placeURL);
  },

  determineRatingInfo: function() {
    this.num_reviews = this.props.searchResult.reviews.length;
  },

  componentDidMount: function() {
    this.sum = 0.0;
    var reviews = this.props.searchResult.reviews;
    reviews.forEach(function(review) {
      this.sum += parseFloat(review.rating);
    }.bind(this));
    var ave = parseFloat(this.sum)/this.num_reviews;
    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
    $rate.rating('update', ave);
  },

  render: function() {
    // this.determineRatingInfo();
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

});
