var ReviewIndex = React.createClass({
  getInitialState: function() {
    return { reviews: ReviewsStore.all() };
  },

  componentDidMount: function() {
    ReviewsStore.addChangeListener(this.onChange);
    ApiUtil.fetchReviews({place_id: this.props.placeId});
  },

  onChange: function() {
    this.setState({ reviews: ReviewsStore.all() });
    //use map to return rather than forEach!
  },

  render: function() {
    return (
      <div>
            {
              this.state.reviews.map(function(review) {
                return <ReviewIndexItem review={review} />;
              })
            }
      </div>
    );
  }
});
